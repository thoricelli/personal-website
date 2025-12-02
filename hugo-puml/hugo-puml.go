package main

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

const (
    contentDir = "content/blog/"
    outputDir = "static/diagrams"
)

var diagrams int
var currentDirectory string

func main() {
    currentDirectory, _ = os.Getwd()

    err := os.RemoveAll(outputDir)

    if (err != nil) {
        panic(err)
    }

    err = os.MkdirAll(outputDir, os.ModePerm)
    
    if (err != nil) {
        panic(err)
    }
    
    err = filepath.WalkDir(contentDir, walkMarkdowns)

    fmt.Printf("Done! Diagrams created %d.", diagrams)
}

func walkMarkdowns(path string, dirEntry fs.DirEntry, err error) error {
    if (err != nil) {
        return err
    }

    if (dirEntry.IsDir()) {
        return nil
    }

    lowerDirName := strings.ToLower(dirEntry.Name())

    if (!strings.HasSuffix(lowerDirName, ".puml")) {
        return nil
    }

    content, err := os.ReadFile(path)

    if (err != nil) {
        return err
    }

    uml := strings.TrimSpace(string(content))

    folderName := filepath.Base(filepath.Dir(path))

    hash := sha256.Sum256([]byte(uml))
    hashStr := hex.EncodeToString(hash[:])[:8]
    outFile := filepath.Join(outputDir, folderName + "-" + hashStr + ".svg")

    if _, err := os.Stat(outFile); os.IsNotExist(err) {
        err := renderSVG(path, uml, outFile)

        if (err != nil){
			fmt.Fprintf(os.Stderr, "Failed to render %s: %v\n", outFile, err)
			return nil
		}

        diagrams++
        fmt.Println("Rendered:", outFile)
    } else {
        fmt.Println("Already exists:", outFile)
    }

    return nil
}

func renderSVG(currentPath, uml, outPath string) error {
    cmd := exec.Command("java", "-jar", filepath.Join(currentDirectory, "plantuml.jar"), "-tsvg", "-pipe")

    dir := filepath.Dir(currentPath)

    cmd.Dir = dir
    cmd.Stdin = strings.NewReader(uml)
    
    var out bytes.Buffer
    var stderr bytes.Buffer

    cmd.Stdout = &out
    cmd.Stderr = &stderr

    err := cmd.Run()

    if (err != nil) {
        return fmt.Errorf("plantuml error: %s", stderr.String())
    }

    return os.WriteFile(outPath, out.Bytes(), 0644)
}