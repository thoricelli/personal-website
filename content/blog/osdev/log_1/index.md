---
title: Log 1
date: 2026-11-13T20:00:00+01:00
comments: true
---
It has to begin somewhere, right?  
In this post I talk about the first steps I had to go through to set up a bare-bones OS.
<!--more-->

Well, oh, well.  
What a task I'm putting onto myself.

I've decided to start devlogging this since it'll be interesting to write down all the things I learn along the way.  

# Preface

Two months ago I decided to make an OS on my own using the:  
"[Creating an Operating System](https://wiki.osdev.org/Creating_an_Operating_System)" tutorial on the OSDev wiki.

I've sadly been busy with other projects in the mean-time, but I'm committing at least a few hours a day to this now.  

These devlogs wont be posted daily.  
I will write these devlogs whenever I come across: a problem, a solution, new knowledge that I gained, etc...

# Set up

I'm calling it "Thor's Kernel"! Yes, very creative, thank you.  

It will be a [monolithic kernel](https://wiki.osdev.org/Monolithic_Kernel) (the typical kernel design), I'm not trying to get overly-fancy anyways...  
Since I'm using the GNU compiler, the kernel will be in an [ELF format](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format).

Writing a [bootloader](https://en.wikipedia.org/wiki/Bootloader) is not going to be part of this project.  
So, I'll be using [GNU GRUB](https://en.wikipedia.org/wiki/GNU_GRUB), specifically the [multiboot2](https://www.gnu.org/software/grub/manual/multiboot2/multiboot.html) boot standard.

My repository is here: https://github.com/thoricelli/Thor-s-Kernel!  

It is licensed under the... [Do What The Fuck You Want To](https://en.wikipedia.org/wiki/WTFPL) license!  
(yes this is real lol)

I'm not really serious with this so, hell, let's have some fun with the license.

# Cross-compiler

The first step is building a cross compiler.  

I can't use the normal build of the [GNU compiler (GCC)](https://en.wikipedia.org/wiki/GNU_Compiler_Collection) without adding a billion-and-one flags to it, since the public version is specifically built for [user-space](https://en.wikipedia.org/wiki/User_space_and_kernel_space) programs.  

And.. I'm on Windows which makes building this a bit harder...  
So I'm going to leech of of someone else being able to [compile the cross compiler](https://github.com/lordmilko/i686-elf-tools) :D.

That gives me a compiler for `i686` and `x86_64` CPU's!

# Setting up the project

For this project I'll need a few basic files:
- `CMakeList.txt`:  
I'm not going manually define a Makefile (only really for basic commands), and since I'm using [Ninja](https://en.wikipedia.org/wiki/Ninja_(build_system)) as my build system: CMakeLists comes in handy.
- `grub.cfg`: Used here to define my OS as the default boot option for grub.
- `linker.ld`: This contains the sections of the ELF binary.  
This file is needed to add the multiboot2 header, and add a 1MB padding due to the [x86 memory map](https://wiki.osdev.org/Memory_Map_(x86)).
- `toolchain-x.cmake`: These files define what compiler for C, C++ and assembly that that target uses (i686 and x86_64 respectively).

{{<figure src="structure.png" caption="Barebones OS file structure">}}

# Writing the barebones

It's assembly time!

First thing GRUB needs is the multiboot header at the start of our binary according to the documentation:
{{<figure src="/diagrams/log_1/multiboot2.svg" caption="Header required by multiboot2." loading="lazy">}}

Then I can define the entry: `ENTRY(_start)`.  

Now the task of the assembly part is this: get to C as *quick* as possible. (because I do NOT like dealing with assembly).  

The GRUB bootloader already takes care of switching the CPU to [protected mode](https://en.wikipedia.org/wiki/Protected_mode), I wont have to do this myself.

Sidenote: I already wrote the ability for the OS to go into [long mode](https://en.wikipedia.org/wiki/Long_mode), but well this more or less introduces way more complexity to write the OS for both 32-bit and 64-bit systems.  
So, I'll keep that functionality in there for now and hard-code that all systems will be in [protected mode](https://en.wikipedia.org/wiki/Protected_mode).

Anyways some stuff before I need to handle first:
- Check if the OS was started by GRUB or not (I'm only supporting GRUB for now).
- Set up barebones paging (this was initially for long mode).
- Jump to the `kernel_main` function in C.

Then, time to write something to the screen.  
The most simplistic way to do this is to write directly to the [VGA text memory](https://en.wikipedia.org/wiki/VGA_text_mode).

Now time to build it and package it via `grub-mkrescue`, and run it via [Qemu](https://en.wikipedia.org/wiki/QEMU).  
Et, voilà!


{{<figure src="img/vga.png" caption="VGA text example." loading="lazy">}}

This is nice, but... VGA memory is not supported anymore in modern systems in favor of [GOP (EUFI)](https://wiki.osdev.org/GOP).

Luckily GRUB passes a framebuffer we can write to via the [boot information header](https://www.gnu.org/software/grub/manual/multiboot2/html_node/Boot-information-format.html), along some other goodies like: memory information, the 32-bit and 64-bit EFI table, etc.

# Next steps

That'll be it for this devlog, the next steps will be:
- Writing a basic kernel library for standard C functions (libk).
- Writing pixels to the framebuffer.
- Writing glyphs to the framebuffer.
- Dynamic memory management.
- Listening for a keyboard interrupt and receiving input from a PS/2 keyboard.