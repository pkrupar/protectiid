import React from "react";
import "typeface-roboto";

import SEO from "../components/seo";

import Logo from "../images/logo.svg";
import ChromeImage from "../images/chrome.svg";
import pkrupar from "../images/pkrupar.jpg";
import singleUseEmailAddress from "../images/single-use-email-address.svg";
import extensionScreenshot from "../images/protect-iid--store-screenshot.png";

import SingleUseEmailAddressImage from "../images/single-use-email-address.svg";

import "../components/layout.css";

const IndexPage = () => (
	<main
		style={{
			maxWidth: `100%`,
			width: "640px",
			margin: "0 auto",
			padding: "50px 20px",
			fontFamily: "Roboto, Sans-serif",
			lineHeight: 1.55,
			color: "#585858"
		}}
	>
		<SEO title="Protect IID" />
		<header style={{ marginBottom: 70 }}>
			<Logo
				style={{ width: 180, margin: "0 auto 30px", display: "block" }}
			/>

			<div style={{ textAlign: "center" }}>
				Learn to <b>Protect</b> your <b>Internet Identity</b>.
			</div>
		</header>

		<section style={{ marginBottom: 50 }}>
			<SingleUseEmailAddressImage
				style={{
					width: "100%",
					margin: "0 auto 50px",
					display: "block"
				}}
			/>

			<h2 style={{ color: "black" }}>
				What is a single-use email address
			</h2>
			<p>
				Single-use email address is a generated email address that is
				used only once when signing up for a service. It makes
				impossible for attackers to predict which email address was used
				for which service. Additionally, using the single-use email
				address in combination with a non-personalised domain increases
				privacy protection.
			</p>
			<p>
				For example, <code>john.doe@gmail.com</code> unintentionally
				exposes your name. On the other hand,{" "}
				<code>aniaf872a@duckduckwho.com</code> doesn't expose any data
				other than an assumption you might be an owner of
				duckduckwho.com. Domain owner data are protected by most domain
				registrators.
			</p>
			<p>
				As online privacy is becoming more of a luxury, purchasing a
				cheap domain that is used exclusively for anonymous single-use
				email addresses is a considerable investment.
			</p>
		</section>

		<section style={{ marginBottom: 50 }}>
			<h2 style={{ color: "black" }}>
				When to use single-use email addresses
			</h2>
			<p>
				You should consider the usage of generated single-use email
				addresses as it increases your privacy on the internet. However,
				single-use email addresses shouldn't be the only thing in your
				arsenal. In short:
			</p>
			<ul>
				<li style={{ marginBottom: 5 }}>
					Always use a strong and unique password for each service you
					sign up for.
				</li>{" "}
				<li style={{ marginBottom: 5 }}>
					For storing passwords and single-use email addresses you can
					use password managers such as{" "}
					<a href="https://www.lastpass.com/" target="_blank">
						LastPass
					</a>{" "}
					or{" "}
					<a href="https://1password.com/" target="_blank">
						1Password
					</a>
					.
				</li>
				<li style={{ marginBottom: 5 }}>
					You should have{" "}
					<a
						href="https://en.wikipedia.org/wiki/Multi-factor_authentication"
						target="_blank"
					>
						Two-factor authentication (2FA)
					</a>{" "}
					turned on.
				</li>
				<li style={{ marginBottom: 5 }}>
					Don't forget to always take everything on the internet with
					a grain of salt.
				</li>
			</ul>
		</section>

		<section style={{ marginBottom: 50 }}>
			<h2 style={{ color: "black" }}>How does single-use email addresses work</h2>
			<p>
				For single-use email addresses to work, you need to own a domain
				and configure a catch-all email address. Catch-all email address
				receives all incoming email messages. This allows using anything
				in the local part (the part before @) of an email address and
				still receive the incoming email messages.
			</p>
			<p>
				For example, assuming a functional email address is{" "}
				<code>hello@example.com</code> and the catch-all email address
				is not configured. An email message sent to{" "}
				<code>hello@example.com</code> will be received. An email
				message sent to the <code>does-not-exist@example.com</code> will
				not be received and will bounce. If a catch-all email address is
				configured for the example.com domain, the same email message
				sent to <code>does-not-exist@example.com</code> will now be
				received.
			</p>
			<p>
				The catch-all email address can be configured to forward any
				email messages that it receives to your primary email address.
				Once your catch-all email address is configured, there is no
				further manual work required.
			</p>
		</section>

		<section style={{ marginBottom: 50 }}>
			<h2 style={{ color: "black" }}>
				How to set up catch-all email address
			</h2>
			<p>
				To set up your own catch-all email address, you'll need to own a
				domain. The domain you choose to be your catch-all domain
				shoudn't be use for anything else. For example, to use a
				personal domain as catch-all domain is not recommended. Buying a
				brand new domain that will be used just as a catch-all domain
				might be the best practise.
			</p>

			<p>
				The most straightforward way to set up the catch-all email
				address is to buy your new domain with Namecheap (this website
				is not affiliated with Namecheap). You can in a few clicks set
				up email forwarding from your catch-all email address right from
				their dashboard for no additional cost.
			</p>

			<p>
				Visit{" "}
				<a href="https://www.namecheap.com/domains/" target="_blank">
					https://www.namecheap.com/domains/
				</a>{" "}
				and purchase a domain, then{" "}
				<a
					href="https://www.namecheap.com/support/knowledgebase/article.aspx/310/2214/how-to-set-up-a-catchall-wildcard-email-address"
					target="_blank"
				>
					follow this official Namecheap guide
				</a>{" "}
				to configure email forwarding from your catch-all emaill
				address.
			</p>
		</section>

		<section style={{ marginBottom: 50 }}>
			<img
				src={extensionScreenshot}
				alt="ProtectIID extension screenshot"
				style={{
					display: "block",
					width: "100%",
					height: "250px",
					objectFit: "cover",
					objectPosition: "top right"
				}}
			/>

			<h2 style={{ color: "black" }}>
				Generating single-use email addresses
			</h2>
			<p>
				A single-use email address can have anything in the local part
				of an email address as long as it is sufficiently unpredictable
				and unique. A randomly generated string is a recommended
				practice. You might use your password manager's password
				generating function to generate the local part of your
				single-use email address or come up with something random
				manually. The local part of an email address cannot be longer
				than 64 characters as stated in{" "}
				<a
					href="https://www.rfc-editor.org/rfc/rfc3696.txt"
					target="_blank"
				>
					RFC 3696
				</a>{" "}
				(page 6).
			</p>
			<p>
				<b>
					For ease of generating single-use email addresses, you can
					use the official Protect&nbsp;IID Google&nbsp;Chrome
					extension.
				</b>
			</p>
			<div>
				<a
					href="https://chrome.google.com/webstore/detail/protect-iid/pohhdoefhlffonadgcfpfebhpcecanbm"
					target="_blank"
					style={{
						background: "#e4e4e4",
						color: "black",
						fontWeight: "bold",
						height: 60,
						padding: "0 20px",
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<ChromeImage style={{ width: 30, margin: "0 15px 0 0" }} />
					Get Chrome extension
				</a>
			</div>
		</section>

		<hr style={{ margin: "100px 0" }} />

		<section style={{ marginBottom: 50 }}>
			<p>
				Made by{" "}
				<a href="https://twitter.com/pkrupar" target="_blank">
					@pkrupar
				</a>
				. Wait! There's more where this comes from. Get behind the
				scenes of hustling maker by{" "}
				<a
					href="https://pkrupar.com/subscribe"
					target="_blank"
				>
					subscribing to my mailing list
				</a>
				. I'm making cool projects you might like, for example,{" "}
				<a href="https://sidemail.io/" target="_blank">
					sidemail.io
				</a>
				. Thanks!
			</p>

			<a
				href="https://pkrupar.com/subscribe"
				target="_blank"
				style={{
					background: "#e4e4e4",
					color: "black",
					fontWeight: "bold",
					height: 60,
					padding: "0 20px",
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<img
					src={pkrupar}
					alt="pkrupar"
					style={{
						width: 30,
						margin: "0 15px 0 0",
						borderRadius: 999
					}}
				/>
				Subscribe to @pkrupar's mailing list
			</a>
		</section>
	</main>
);

export default IndexPage;
