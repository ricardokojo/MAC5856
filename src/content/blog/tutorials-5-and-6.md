---
title: 'Tutorials 5 and 6'
description: 'Following tutorials 5 and 6'
pubDate: '2026/03/31'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

This post is about my experience following tutorials [5](https://flusp.ime.usp.br/git/sending-patches-by-email-with-git/) and [6](https://flusp.ime.usp.br/git/sending-patches-with-git-and-a-usp-email/).

I had more trouble than I thought I would for this ones, since it only involved setting up and sending emails.

Well, it all started with the fact that I did some parts of tutorial 5 before class, more specifically setting up some Git config attributes, which ended up causing me trouble later on.

After class, there was a new tutorial 6 to setup using our USP email. Since we were going to use `kw` and I couldn't go further into tutorial 5 steps, I immediately started tutorial 6. When I got to the point to send the email (without `--simulate`) I received some `STARTTLS` errors.

This is the log inside the container:

```
2026-03-31 01:11:20: Initialising Email OAuth 2.0 Proxy (version 2025-03-14) from config file /app/emailproxy.config
Initialising Email OAuth 2.0 Proxy (version 2025-03-14) from config file /app/emailproxy.config
2026-03-31 01:11:20: Starting SMTP server at 0.0.0.0:2587 (unsecured) proxying smtp.gmail.com:587 (STARTTLS)
Starting SMTP server at 0.0.0.0:2587 (unsecured) proxying smtp.gmail.com:587 (STARTTLS)
2026-03-31 01:11:20: Initialised Email OAuth 2.0 Proxy - listening for authentication requests. Connect your email client to begin
Initialised Email OAuth 2.0 Proxy - listening for authentication requests. Connect your email client to begin
2026-03-31 01:11:33: Accepting new connection from 172.18.0.1:60194 to SMTP server at 0.0.0.0:2587 (unsecured) proxying smtp.gmail.com:587 (STARTTLS)
Accepting new connection from 172.18.0.1:60194 to SMTP server at 0.0.0.0:2587 (unsecured) proxying smtp.gmail.com:587 (STARTTLS)
2026-03-31 01:11:35: SMTP (0.0.0.0:2587) Client attempted to begin STARTTLS - please either disable STARTTLS in your client when using the proxy, or set `local_starttls`and provide a `local_certificate_path` and `local_key_path`
SMTP (0.0.0.0:2587) Client attempted to begin STARTTLS - please either disable STARTTLS in your client when using the proxy, or set `local_starttls`and provide a `local_certificate_path` and `local_key_path`
```

And this was the one outside, running `kw sent-patch <...>`:

```
STARTTLS failed!  at /usr/lib/git-core/git-send-email line 1638.
```

It took me some time researching and even asking to AI agents to help me debug it. Since it looked like a simple error, and there was no comment about it on the tutorial or in the course forum, I thought that it might be something on my side. I ended up deleting the `git configs` that I had setup for tutorial 5 and that solved it :)

But, this wasn't the only problem I had. After trying to send the email and getting the OAuth2 link to Google, I received another error: `Access blocked: DSL 2026 OAuth Proxy has not completed the Google verification process.` Since I had no other options, I went to sleep with that error.

I was going to send a message at the class' Telegram group, but I went to try it once again before that and it worked. I'm not sure about what was the problem, but I imagine my email was not on a allowlist or something, since I was one of the latest to add my @usp.br email to the pad.

Finally, I was able to send the email and complete the tutorial.
