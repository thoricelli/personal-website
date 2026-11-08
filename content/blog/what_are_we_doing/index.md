---
title: People, what are we genuinely doing?
date: 2026-11-07T20:00:00+01:00
subject: ["Software Development", "AI"]
comments: true
---
Hi to, like, the 1 random person stumbling upon my website.  

I haven't posted in a while...  
I still have a blog post in the works that explains the internals of the Roblox engine, however that has been put on the wayside...  
I've been busy helping with a [seperate project](/about-me).

That's not the point of this article though, what is:  
**The use of agentic AI within and outside of software development**.

<!--more-->

# Table of contents

{{<toc>}}

# My story

So, I've been unemployed for some time now.  
The junior market in Belgium (and the rest of the world) is truly in shambles.  
(I've picked the perfect time to graduate!)

And there are multiple reasons that companies aren't or are barely hiring (software) juniors:
- Recession = tight budget  
(no, the stock market does not reflect real life)
- The huge amount of software graduates / applicants per job
- And lastly... AI

It's a shame, and I'll have to decide what I'm going to do in the near future.

Will I keep programming?  
Something I've studied and worked on for nearly my entire life, 

...Or will I just keep it as a hobby?  
And I'll have to restart my career to pivot to something totally unrelated.

## First use of AI

I remember signing up to OpenAI's ChatGPT beta somewhere around late 2022.  
I didn't get early access of course...

Back then LLM's were fairly primitive, and the early ChatGPT model reminded me a lot of early AI sites like [CleverBot](https://en.wikipedia.org/wiki/Cleverbot).  
The model was just a funny gimick back then, since it would [hallucinate](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) constantly.

One day at school, after we had to submit an essay on how the first year of my bachelors went, the teacher said:
> "I know most of you used AI to write this essay, you're lucky we don't have the detection tools for it yet..."

Fast forward to today, about 4 years later.  
A lot has changed.

## Threatening my job

I've always been a bit paranoid about AI and the looming threat it poses to software jobs.  
But everytime I tried to use it to see how far these models could go... I felt safe.  

The thing is these models would hallucinate or overly complicate software **everytime**.  
"Phew, I mean people wouldn't possibly replace programmers with this right?"  

...Wrong.

## Teltale signs

If you've been doomscrolling social media (like me), you surely have noticed the sudden influx of posts about people using AI to:  
- Reverse engineer
- Recreate entire games
- Shove their AI SAAS product in your face
- ...

And there seems to be a heated debate everytime between anti-AI people, and pro-AI people:  

> "If you don't use AI, you'll be left behind!"  
> "AI is the future!"

And with social media being well... social media I just shrugged that off as AI tech bro's being themselves.

# No escape from the slop

But no, every Reddit post:  
"Yeah we use AI to program now, I don't even write code!"  

Trying to find any informational video on YouTube just gives you mountains of useless slop!

Every Roblox place has an AI-slop thumbnail.  
For christs sake the game *I'm helping on* is getting slop-copied by AI 

A personal project of mine was forked and AI was used to rebuilt it entirely.  
But not that I care! My projects are [MIT](https://en.wikipedia.org/wiki/MIT_License)-licensed.  
But could you... at least have properly understood it and sent a PR?

## Open source

I see an open source project that solves a niche problem:  
"I can't wait to learn from this!"

I open their repo.  
Their README is an entire bible of text that doesn't make any sense!

When I try to read their source code: it's **FULL** of comments.  

Yep... code that [reinvents the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel#In_software_development)...  
Yep... those are [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)) everywhere...  
Yep... the comments are overly verbose...

## I'm tired, boss

Everywhere I see AI ads, AI posters, [**AI EVERYTHING**](https://youtu.be/90XC-Of43eE)!!

And listen, I don't care what you use agentic AI for.  
You want to reverse engineer something niche, go ahead!

What I *do* care about is:  
- That hard work is not stolen.
- That code stays properly maintained, well optimized and easy to read.
- That I'm not thrown aside for some model!

# What AI is

I URGE everyone to watch 3Blue1Brown's series on neural networks: [here](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi).

[LLM's](https://en.wikipedia.org/wiki/Large_language_model) like Claude, ChatGPT, Grok, ... they are all based on the [transformer architecture](https://en.wikipedia.org/wiki/Transformer_(deep_learning)).  

These models can be (overly) simplified to:
1. Something goes into the model.
2. The model predicts the most likely next word (a token) in the sentence.
3. You get your output.

It is a **PROBABILITY** machine, a **PREDICTION** machine.

How it predicts these tokens is by training on a LOT of data, a LOT of compute and changing its weights based on the data itself.

## What AI isn't

These models they cannot logically "think" the way we humans do.  
They just predict based on a probability what the correct token is.  

This is *why* models hallucinate.  
This is *why* its easy to notice patterns in AI generated content.  
This is *why* it generates **believable** code.  
This is *why* using agentic AI feels like a slot machine.

But more importantly, this is also why most of these projects stay in [development hell](https://en.wikipedia.org/wiki/Development_hell).

## What AI is killing

Increasingly people are depending on Claude to [vibecode](https://en.wikipedia.org/wiki/Vibe_coding) their software.  

Why learn to code...  
Why learn the fundamentals, the abstractions, the libraries, the programming languages, ...   

when Claude can do it?  

> "Oh Claude will just maintain my project, heh, I'm not able to read all that code!"

Wut... I'm going to go insane.

These people who just vibecode, send slop PR's, and slop together a project without an inch of knowledge of their or others codebases are:
- [Killing open source](https://arxiv.org/abs/2601.15494v1).  
- Creating code without taking ANY responsibility for what they write.
- Stealing work.
- Creating an imense amount of noise.

Think about where the AI got it's training data from: people, humans.  
People who put their time and effort into it, who LOGICALLY thought about the architecture.

Let's not talk about the [staggering amount of money](https://youtu.be/6ZrgRjdJs3o?si=upMr1RZ4d76-y0l5) that has been invested into training these models.  
The staggering amount of datacenters [ruining ecosystems](https://www.theguardian.com/world/2026/oct/29/finland-criminal-investigation-google-clearing-forest-datacentre) around the world.

But man, where oh where could that possibly have been invested better into?

## Why does AI code matter?

That's the thing, it doesn't.

To management at company X that knows nothing about maintainability this is great!  
> "You can do this x10 with AI now, this is great!  
> What did you say?  
> You can rewrite it in Rust to make it x10 faster too?   
> Amazing!"

The many horror stories, before AI, that I've heard about companies with terrible codebases and their software is still successful and in use.

But... who does it matters to?  
The developers, the users. The people who use your software.  

They notice the changes that don't make any sense.  
The broken features that nobody asked for or nobody uses.  
The hit on performance.

# End of rant

Listen, if you just use this for a fun hobby project and you want to add a feature or liberate yourself from closed source, all the power to you man.

But I **refuse** to use agentic coding.  
AI is a **tool** not a replacement for programmers.

I hope I can find work somewhere that shares this idea.

Well, I'm going back to figuring out what the hell I want to do with my life now.  
I haven't even properly started my career yet.  

I'll go ask Claude for the next best steps, I'm sure that'll help.

Fully written by a fellow [Human](/about-me).