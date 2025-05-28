"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DFUPage() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col gap-8 max-w-3xl mx-auto">

				{/* Hero */}
				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center text-center"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-8"
					>
						DFU Mode Restore (Macs)
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="w-full mb-12"
					>
						<Image
							src="/assets/images/Do-not-reflow-t2.png"
							alt="Image of a T2 chip"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg object-cover"
							priority
						/>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
							Mac with Apple silicon or the Apple T2 Security Chip might stop responding and need its firmware to be revived or restored by another Mac.
						</p>
					</motion.div>
				</motion.div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="text-gray-900 dark:text-gray-100 leading-relaxed space-y-14"
				>

					{/* Section 1 */}
					<section className="space-y-4">
						<h1 className="text-4xl font-semibold mb-4">
							Rituaalid enne elektroonikut
						</h1>
						<p className="mb-4">
							Kui Maci püsivara vajab taastamist või elustamist, võib Apple Siliconi või T2 kiviga seade muutuda laibaks. Seda juhtub harva, kui DFU midagi korda teeb aga kui teeb siis on see üks ilus päev. Tüüpilised sümptomid:
						</p>
						<ul className="list-disc list-inside text-base space-y-1 mb-4">
							<li>Apple Silicon seadmel on käivitamisel hüüumärk ees</li>
							<li>Seade käivitub, aga pilti ette ei võta</li>
							<li>Peale seerianumbri vahetust ainult 5V</li>
							<li>Mis tahes ebõnnestunud OS-install</li>
						</ul>
						<p className="mb-4">
							Nendel juhtudel võiks DFU tegemisest kasu olla. Kui DFU enam ei aita, tuleks juba elektroonikud protsessi kaasata.
						</p>
					</section>

					{/* Section 2 */}
					<section className="space-y-6">
						<h2 className="text-4xl font-semibold mb-4">
							Teadaolevad veakoodid ja tähendused
						</h2>

						<table className="w-full">
							<tbody>
								{[
									["1", "Trackpad ei ole ühendatud; püsivara taastamiseks peab olema trackpad ühendatud."],
									["6", "SSD viga: BridgeOS ei suuda kirjutada. Võimalik kuum NAND."],
									["9", "Toiteviga (NAND/RAM/SEP ROM mismatch)."],
									["10", "Kehv kaabel või ühendus."],
									["21", "SoC ROM või NAND mismatch."],
									["35", "NAND-trace/sysconfig mismatch."],
									["56", "Vigane või pragunenud Stockholm-kivi."],
									["75", "T2 bootis recoverysse; revive ei tööta."],
									["3004", "Hostil internet puudub."],
									["3501", "Seade soovib lisavõimsust."],
									["4005", "NAND puudub."],
									["4013", "NAND-sysconfig viga."],
									["4014", "Ootamatu restart (RAM/võimsus/või aku)."],
									["4042", "Timeout (tõenäoline NAND viga)."]
								].map(([code, desc]) => (
									<tr key={code} className="align-top">
										<td className="pr-6 text-2xl font-medium text-gray-900 dark:text-gray-100">
											{code}
										</td>
										<td className="pb-6 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
											{desc}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</section>

					{/* Section 3 */}
					<section className="space-y-4">
						<h2 className="text-4xl font-semibold mb-4">
							Veakoodid Recoverysse bootimisel
						</h2>
						<ul className="list-disc list-inside text-base space-y-1">
							<li><strong>-2003F:</strong> Internetiühendus; proovida Thunderbolt-LAN adapterit.</li>
							<li><strong>-1008F:</strong> iCloud/FMM lock; eemalda seade kontolt ja proovi uuesti.</li>
						</ul>
					</section>

					{/* Section 4 */}
					<section className="space-y-4">
						<h2 className="text-2xl font-semibold mb-4">
							Üldised näpunäited
						</h2>
						<ul className="list-disc list-inside text-base space-y-1">
							<li>Kontrolli alati aku ja trackpadi seisukorda.</li>
							<li>Eemalda kõik ebavajalikud seadmed enne DFU-d.</li>
							<li>Katseta masinat teise komplektse komponentehnoloogi abil.</li>
							<li>Kasuta Recoverysse minnes alati LAN-kaablit.</li>
						</ul>
					</section>

					{/* Source */}
					<p className="text-sm text-gray-500">
						Source:{" "}
						<a
							className="underline"
							href="https://logi.wiki/index.php/DFU_Mode_Restore_(Macs)"
							target="_blank"
						>
							logi.wiki
						</a>
					</p>

				</motion.div>
			</div>
		</div>
	)
}
