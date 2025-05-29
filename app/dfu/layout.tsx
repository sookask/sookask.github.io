import { Metadata } from "next"

export const metadata: Metadata = {
	title: "DFU info | aabits",
	description: "Mida teha, kui Mac ei käivitu või on DFU-režiimis.",
	openGraph: {
		title: "DFU info | aabits",
		description: "Mida teha, kui Mac ei käivitu või on DFU-režiimis.",
		images: [
			{
				url: "/assets/images/Do-not-reflow-t2.png",
				width: 1480,
				height: 386,
				alt: "Mida teha, kui Mac ei käivitu või on DFU-režiimis.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "DFU info | aabits",
		description: "Mida teha, kui Mac ei käivitu või on DFU-režiimis.",
		images: ["/assets/images/Do-not-reflow-t2.png"],
	},
}

export default function DFULayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
} 