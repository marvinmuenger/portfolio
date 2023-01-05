---
banner_alt: Quick Drive
banner: https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80
title: Quick Drive - The Tech Stack I Chose and Why
description: Why .Net MAUI, Blazor and Supabase make the perfect Tech Stack for Quick Drive
date: '2022-12-12'
---
This blog article is about Quick Drive, the most sophisticated Project I took on to this date. Quick Drive is a multi platform application with the goal of simplifying the administrative work for driving schools in Switzerland.

## Introduction to Quick Drive and the importance of tech stack selection

As the sole developer of Quick Drive, I had to carefully consider the tech stack that would best support the platform's features and functionality. After much research and experimentation, I ultimately
decided to go with Blazor, .Net MAUI and Supabase.

## The role of Blazor and .Net MAUI

Choosing the right frontend technology was a challenging task for me, as I wanted to find a framework that would allow me to write code once and deploy it to multiple platforms. After much research, I narrowed my options down to two frameworks: Flutter and .Net.

Flutter is a popular frontend framework developed by Google that allows developers to build native apps for multiple platforms using a single codebase. While I had some success using Flutter for small test projects, such as a basic [Notes App](https://github.com/marvinmuenger/FlutterNotes), I ultimately decided to go with .Net because it allowed me to leverage my existing knowledge and skills in C# and HTML.

One of the main components of my .Net tech stack is Blazor, a framework for building web applications using C# and HTML. Blazor compiles the .NET code into WebAssembly (Wasm), which can then be deployed as a static bundle. It also supports interoperability with JavaScript libraries, meaning that I can still use npm modules with a Blazor project by importing them with the build.

While Blazor is primarily a frontend framework for web applications, it can be integrated into native applications through the use of .Net MAUI (Multi-platform App UI). .Net MAUI is a cross-platform UI framework for building native mobile and desktop applications. By using a .Net MAUI hybrid, I can build a single codebase that can be deployed to all platforms while still having the ability to use native UI components where necessary and reuse my Blazor code throughout the project. This means that I still have the benefits of a single codebase, but I can also take advantage of native features where necessary or where performance is critical.

## The role of Supabase

Because I am developing alone on this project, I need to keep things as simple as possible. For this reason, I decided to look at Back End as a Service (BAAS) providers that combine database, API, authentication and file storage on a single platform for the backend. The two main contenders were Firebase and Supabase. I ultimately decided to go with Supabase and here are the key reasons why:

1. Supabase is **open source** and free to use. This means that I can potentially self host it in the future if I need to - meaning no vendor lock in.
2. Supabase uses a **relational database** (Postgres) instead of a NoSQL database (Firebase). This is benefial for Quick Drive since it requires complex data structures and relationships.
3. Supabase has a **user-friendly API** that makes it easy to interact with the database and build custom integrations.

## Other technologies used

In addition to the main technologies mentioned above, I also use a number of other technologies to build Quick Drive. These include:

- **Stripe** to allow users to invoice their driving students and receive payments
- **SMTP2GO** to send emails and track the status of sent invoices
- **Netlify** to host the web application

## Conclusion

Choosing the right tech stack is an important decision that can have a significant impact on the success of a project. In this article, I explained why I chose the tech stack I did for Quick Drive. I hope this article was helpful and if you have any questions, feel free to reach out to me.
