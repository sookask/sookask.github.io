"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DFUPage() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col gap-8 max-w-3xl mx-auto">
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
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="text-lg leading-relaxed space-y-6 text-left text-gray-900 dark:text-gray-100"
					>
						<h1 className="text-4xl font-semibold mb-4">
							Rituaalid enne elektroonikut
						</h1>
						<p className="mb-4">
							Kui Maci püsivara vajab taastamist või elustamist, võib Apple Siliconi või T2 kiviga seade muutuda laibaks. Seda juhtub harva, kui DFU midagi korda teeb aga kui teeb siis on see üks ilus päev. Tüüpilised sümptomid:
						</p>
						<ul className="list-disc list-inside text-base mb-4 space-y-1">
							<li>Apple Silicon seadmel on käivitamisel hüüumärk ees</li>
							<li>Seade läheb käima, aga pilti ette ei võta</li>
							<li>Peale seerianumbri vahetust ainult 5 V</li>
							<li>Mis tahes ebõnnestunud OS-install</li>
						</ul>
						<p>
							Nendel juhtudel võiks DFU tegemisest kasu olla. Kui enam DFU enam ei aita, tuleks juba elektroonikud protsessi kaasata.
						</p>
						<h3 className="text-4xl font-semibold">Teadaolevad veakoodid ja tähendused</h3>
						<ul className="list-disc list-inside text-base mb-4 space-y-1">
							<li><strong>1:</strong> Trackpad ei ole ühendatud, püsivara taastamiseks peab olema trackpad ühendatud.</li>
							<li><strong>6:</strong> Suure tõenäosusega SSD viga, BridgeOS ei suuda end kirjutada partitsioonile. Katsu kas mõni NAND on kuumemenud.</li>
							<li><strong>9:</strong> NAND-i/RAM-i/ või protsessori toite viga. Võib ka olla vigane SEP ROM, proovi DFU-d. Kui ei aita siis vaheta SEP ROM.</li>
							<li><strong>10:</strong> Kehv ühendus, proovi teist kaablit</li>
							<li><strong>21:</strong> SoC ROM vahetus Apple Siliconil. Võib ka olla vigane NAND.</li>
							<li><strong>35:</strong> NAND-i viga suure tõenäosusega.</li>
							<li><strong>56:</strong> Vigane või mõranenud Stockholmi kivi.</li>
							<li><strong>75:</strong> T2 bootis recoverysse. Proovi uuesti DFU-d teha.</li>
							<li><strong>3004:</strong> Netti pole host arvutis.</li>
							<li><strong>3501 (0xDAD):</strong> Seade mida taastab tahab lisatoidet. Pane kaabel järgi.</li>
							<li><strong>4005:</strong> Ei leia NAND-i.</li>
							<li><strong>4013/4016:</strong> NAND-i viga</li>
							<li><strong>4014:</strong> Ootamatu restart. Võib olla T2 RAM-i viga või vigane aku.</li>
							<li><strong>4042/4045:</strong> Timeout. Suure tõenäosusega NAND-i viga.</li>
						</ul>
						<h3 className="text-xl font-semibold">Post-DFU and OS Recovery Issues</h3>
						<ul className="list-disc list-inside space-y-2">
							<li><strong>GUI issues:</strong> Can be caused by low battery or temp sensor problems.</li>
							<li><strong>Error -2003F:</strong> Usually internet-related, try Thunderbolt-LAN adapter.</li>
							<li><strong>Error -1008F:</strong> iCloud locked device. Remove from FMM/iCloud and retry.</li>
						</ul>
						<h3 className="text-xl font-semibold">General Troubleshooting Tips</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>Try known good battery and trackpad.</li>
							<li>Disconnect unnecessary peripherals.</li>
							<li>Try external power without battery.</li>
							<li>Inspect cable and connection stability.</li>
						</ul>
						<h3 className="text-xl font-semibold">iBoot Log and Factory Debugging</h3>
						<p>
							Using a potassium/banana cable device, factory logs can be accessed via CD3215/17 debug port. This helps diagnose NAND, RAM, PCH, GPU and other Intel EFI issues.
						</p>
						<p className="text-sm text-gray-500">Source: <a className="underline" href="https://logi.wiki/index.php/DFU_Mode_Restore_(Macs)" target="_blank">logi.wiki</a></p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
