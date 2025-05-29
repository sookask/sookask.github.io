"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ArrowRight } from "lucide-react"

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
						DFU ja Maci elustamine
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
							Hüüumärk Apple Silicon seadmel on lahendatav ainult DFU-režiimi kaudu.
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
							Sümptomid enne surnukuuri
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

						{/* Intro */}
						<p className="mb-4">
							Tahest tahtmata võivad DFU protsessi käigus tekkida veakoodid, mis võivad olla segadust tekitavad. Siin on nimekiri teadaolevatest veakoodidest ja nende tähendustest:
						</p>

						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								{/* Table header */}
								<thead className="border-b-2 border-gray-200 dark:border-gray-700">
									<tr>
										<th className="pb-3 text-sm font-medium text-gray-900 dark:text-gray-100 uppercase">
											Veakood
										</th>
										<th className="pb-3 px-8 text-sm font-medium text-gray-900 dark:text-gray-100 uppercase">
											Põhjus
										</th>
										<th className="pb-3 px-8 text-sm font-medium text-gray-900 dark:text-gray-100 uppercase">
											Lisainfo
										</th>
									</tr>
								</thead>

								{/* Table body with bottom border */}
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700 border-b border-gray-200 dark:border-gray-700">
									{[
										["1", "Trackpad ei ole ühendatud. Püsivara taastamiseks peab olema trackpad ühendatud.", "Ühenda trackpad ja proovi uuesti. Võimalusel proovi testmasinasse."],
										["6", "Viitab SSD veale. BridgeOS-i ei suuda kirjutada. Võimalik, et üks NANDidest on kuum.", "Kontrolli kas on kuum, kui on vii elektroonikule."],
										["9", "Sellel veal võib olla mitmeid põhjuseid. Potentsiaalselt võib olla prose, RAM-i või NANDi toitetalitluse häire.", "Proovi teist SEP ROM-i. Veendu, et heatsink oleks ka peal."],
										["10", "Kehv kaabel või ühendus.", "Proovi teist kaablit või I/O boardi."],
										["21", "SoC ROM-i probleem Apple Silicon seadmetel", "Proovi teist SoC ROM-i."],
										["35", "NAND-trace/sysconfig mismatch.", "Kontrolli kas NANDi piirkonnas on vedelikahjustusi."],
										["56", "Vigane või pragunenud Stockholm-kivi.", "Vii elektroonikule."],
										["75", "T2 bootis recoverysse; revive ei tööta.", "Käivita DFU taasterežiim uuesti."],
										["3004", "Su arvuti ei saa interneiga ühendust", "Proovi teist võrku."],
										["3501", "Seade ei ole vooluvõrgus.", "Ühenda toitekaabel järgi, jälgi tarbimist."],
										["4005", "SSD-ga ei saa ühendust.", "Suure tõenäosusega prügi plaat."],
										["4013", "NAND-sysconfig viga.", "Ilmselt NANDi viga."],
										["4014", "Ootamatu reset. Võib olla tingitud T2 RAMist", "Eemalda aku ja proovi uuesti."],
										["4042", "Timeout (tõenäoline NANDi viga).", "Suht 100% NANDi viga."],
									].map(([code, desc, info]) => (
										<tr key={code}>
											{/* Code */}
											<td className="py-4 text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
												{code}
											</td>
											{/* Põhjus */}
											<td className="py-4 px-8 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
												{desc}
											</td>
											{/* Lisainfo */}
											<td className="py-4 px-8 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
												{info}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						{/* Recovery-mode codes below the table */}
						<motion.div
							initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.9 }}
							className="mt-8"
						>
							<Alert className="rounded-lg px-5 py-4 border 
							bg-[#f5f5f7] border-[#696969]
							dark:bg-[#323232] dark:border-[#9a9a9e]">
								<div>
									<AlertTitle className="text-base font-medium text-[#696969] dark:text-[#9a9a9e]">
										Veakoodid Recoverysse bootimisel
									</AlertTitle>
									<AlertDescription className="text-base font-light mt-2 text-black dark:text-white leading-relaxed">
										<p><strong>2003F:</strong> Kehv internetiühendus, proovi Thunderbolt-LAN adapterit.</p>
										<p><strong>1008F:</strong> Viitab iCloud lukule. Kontrolli seerianumbrit checkmendiga.</p>
									</AlertDescription>
								</div>
							</Alert>
						</motion.div>
					</section>

					{/* Section 3 */}
					<section className="space-y-4">
						<h2 className="text-4xl font-semibold mb-4">
							Üldised näpunäited
						</h2>
						<motion.div
							initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="w-full mb-12"
						>
							<Image
								src="/assets/images/liquid-trackpad.jpeg"
								alt="Liquid damage trackpad"
								width={1480}
								height={386}
								className="w-full h-auto rounded-lg object-cover"
								priority
							/>
							<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
								Vedelikukahjustusega trackpad üldjuhul põhjustab DFU protsessi nurjumise. 
							</p>
						</motion.div>
						<ul className="list-disc list-inside text-base space-y-1">
							<li>Kontrolli alati aku ja trackpadi seisukorda.</li>
							<li>Ebaõnnestumisel ühenda lahti mittevajalikud komponendid.</li>
							<li>Võimalusel proovi testmasinat, kui seade on vedelikahjustusega.</li>
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
