---
title: "Test post!"
date: 2025-08-15T10:00:00+01:00
draft: true
thumbnail: silly_car.jpg
comments: false
---

This is a test post.

It is mainly used for styling blog posts.

<!--more-->

# Title

This is the first paragraph of the text!  
Lorem ipsum dolor sit amet.

{{< figure src="silly_car.jpg" alt="A cat sticking it's tongue out" caption="This is a cat btw" >}}

```csharp {hl_lines=[1]}
Debug.WriteLine("Test!")
Console.WriteLine("This is a long bit of text, that you might have to scroll for!")
```

```go {hl_lines=[3,"6-8"]}
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        fmt.Println("Value of i:", i)
    }
}
```

This is a [link](https://www.google.com)

> This is a quote

## Math!

\[
\begin{bmatrix}
1 & 2 & 3\\
a & b & c
\end{bmatrix}
\]

$\text{For } x^2 + bx + a = 0, \text{ there are two solutions: }$
$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

## PUML!

I can also embed puml diagrams.

{{<plantuml src="test.puml" max-height="1">}}
