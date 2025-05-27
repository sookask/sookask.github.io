import { Metadata } from "next"

export const metadata: Metadata = {
	title: "DFU mode | sookask",
	description: "Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked.",
	openGraph: {
		title: "DFU mode | sookask",
		description: "Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked.",
		images: [
			{
				url: "/assets/images/Do-not-reflow-t2.png",
				width: 1200,
				height: 800,
				alt: "Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "DFU mode | sookask",
		description: "Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked.",
		images: ["/assets/images/Do-not-reflow-t2.png"],
	},
}

export default function MissionLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
} 