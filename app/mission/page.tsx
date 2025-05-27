"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MissionPage() {
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
						mission.
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="w-full mb-12"
					>
						<Image
							src="/assets/images/Do-not-reflow-t2.png"
							alt="Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked."
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg object-cover"
							priority
						/>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
							Do not ever reflow T2 or any other chips, even if you seen someone did it and it magically worked.
						</p>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="text-muted-foreground text-lg leading-relaxed space-y-6 text-left"
					>
						<h2 className="text-2xl font-semibold">DFU Mode and Troubleshooting</h2>
						<p>To check if the device is in DFU state, check voltage on SOC_DFU_STATUS. It should be 1.8V if T2 is in DFU mode.</p>
						<h3 className="text-xl font-semibold">Common DFU Errors and Meanings</h3>
						<ul className="list-disc list-inside space-y-2">
							<li><strong>Error 1:</strong> Trackpad not connected.</li>
							<li><strong>Error 6:</strong> BridgeOS write failure, likely SSD issue.</li>
							<li><strong>Error 9:</strong> NAND/RAM/Processor power issue or mismatch.</li>
							<li><strong>Error 10:</strong> Bad cable or unstable connection.</li>
							<li><strong>Error 21:</strong> SoC ROM or NAND failure/mismatch.</li>
							<li><strong>Error 35:</strong> NAND trace/sysconfig mismatch.</li>
							<li><strong>Error 56:</strong> Cracked Stockholm chip.</li>
							<li><strong>Error 75:</strong> T2 in recovery mode; revive won’t work.</li>
							<li><strong>Error 3004:</strong> No internet connection.</li>
							<li><strong>Error 3501 (0xDAD):</strong> Target Mac not powered.</li>
							<li><strong>Error 4005:</strong> SSD not detected.</li>
							<li><strong>Error 4013/4016:</strong> NAND sysconfig issue.</li>
							<li><strong>Error 4014:</strong> Unexpected reset — T2 RAM, power, or battery issue.</li>
							<li><strong>Error 4042/4045:</strong> Timeout error.</li>
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

