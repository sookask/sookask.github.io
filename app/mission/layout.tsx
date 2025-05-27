import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Mission | Alessio Rubicini",
	description: "My mission to build technology that creates space for human creativity and potential.",
	openGraph: {
		title: "Mission | Alessio Rubicini",
		description: "My mission to build technology that creates space for human creativity and potential.",
		images: [
			{
				url: "/assets/images/Rain-Steam-and-Speed-JMW.jpg",
				width: 1200,
				height: 800,
				alt: "Rain, Steam and Speed - The Great Western Railway by J.M.W. Turner",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mission | Alessio Rubicini",
		description: "My mission to build technology that creates space for human creativity and potential.",
		images: ["/assets/images/Rain-Steam-and-Speed-JMW.jpg"],
	},
}

export default function MissionLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
} 