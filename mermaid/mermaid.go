package main

import (
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

const (
	contentDir = "content/blog/"
	outputDir  = "static/diagrams"
)

var diagrams int
var currentDirectory string

func main() {
	currentDirectory, _ = os.Getwd()

	err := os.RemoveAll(outputDir)

	if err != nil {
		panic(err)
	}

	err = os.MkdirAll(outputDir, os.ModePerm)

	if err != nil {
		panic(err)
	}

	err = filepath.WalkDir(contentDir, walkMarkdowns)

	fmt.Printf("Done! Diagrams created %d.", diagrams)
}

func walkMarkdowns(path string, dirEntry fs.DirEntry, err error) error {
	if err != nil {
		return err
	}

	if dirEntry.IsDir() {
		return nil
	}

	lowerDirName := strings.ToLower(dirEntry.Name())

	if !strings.HasSuffix(lowerDirName, ".mmd") {
		return nil
	}

	var filename = strings.TrimSuffix(dirEntry.Name(), filepath.Ext(path))

	var outDir = filepath.Base(filepath.Dir(filepath.Dir(path)))
	var outputFile = filepath.Join(outDir, filename+".svg")

	renderSVG(path, filepath.Join(outputDir, outputFile))

	diagrams++
	fmt.Println("Rendered:", dirEntry.Name())

	return nil
}

func renderSVG(currentPath string, out string) {
	os.MkdirAll(filepath.Dir(out), 0755)

	cmd := exec.Command("mmdc", "-i", currentPath, "-o", out, "-c", "mermaid/mermaid-config.json", "-b", "transparent")

	dir, _ := os.Getwd()

	cmd.Dir = dir

	err := cmd.Run()

	if err != nil {
		panic(err)
	}
}
