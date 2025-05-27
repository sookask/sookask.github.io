"use client"
import { ProjectCard } from "@/components/project-card"
import { useEffect, useState } from "react"
import projectsData from "./projects.json"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectModal } from "@/components/project-modal"

export default function ProjectsPage() {
	const [mounted, setMounted] = useState(false)
	const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null)
	// const [searchQuery, setSearchQuery] = useState("")
	// const [selectedFilters, setSelectedFilters] = useState<string[]>([])
	
	useEffect(() => {
		setMounted(true)
	}, [])
	
	if (!mounted) {
		return null
	}
	
	// const projectTypes = ["products", "ventures", "innovations", "experiments", "contributions"]
	
	// const toggleFilter = (type: string) => {
	// 	setSelectedFilters((prev) =>
	// 		prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
	// 	)
	// }

	const filteredProjects = projectsData.filter((project) => {
		// const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
		// const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(project.type)
		// return matchesSearch && matchesFilter
		return true
	})

	const projectsByYear = filteredProjects.reduce((acc, project) => {
		const year = project.year
		if (!acc[year]) {
			acc[year] = []
		}
		acc[year].push(project)
		return acc
	}, {} as Record<string, typeof filteredProjects>)

	const sortedYears = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a))

  	return (
    	<div className="relative">
      		{/* Modal overlay */}
      		{selectedProject && (
        		<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      		)}
      		<div className={`container px-4 md:px-6 py-12 transition-all duration-300 ${selectedProject ? 'blur-sm pointer-events-none select-none' : ''}`}>
        		<div className="flex flex-col gap-8 max-w-4xl mx-auto">
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
							className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-4"
						>
                			things.
            			</motion.h1>
            			<motion.p 
							initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="text-muted-foreground max-w-[700px] mb-8 text-lg"
						>
							Things I'm making to fix problems, explore ideas, or scratch my own itch.
            			</motion.p>
          			</motion.div>

				{/* <div className="flex flex-wrap gap-3 justify-center mb-8">
					{projectTypes.map((type) => (
						<button
							key={type}
							onClick={() => toggleFilter(type)}
							className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
								selectedFilters.includes(type)
								? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
								: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
							}`}
						>
							{type}
						</button>
					))}
				</div> */}

				<motion.div 
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="flex flex-col gap-16"
				>
					{sortedYears.map((year, yearIndex) => (
						<motion.div
							key={year}
							initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.4 + (yearIndex * 0.1) }}
							className="flex flex-col gap-8"
						>
							<div className="flex items-center gap-4">
								<motion.h2 
									initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
									animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
									transition={{ duration: 0.7, delay: 0.5 + (yearIndex * 0.1) }}
									className="text-3xl font-bold tracking-tight"
								>
									{year}
								</motion.h2>
								<motion.div 
									initial={{ opacity: 0, scaleX: 0 }}
									animate={{ opacity: 1, scaleX: 1 }}
									transition={{ duration: 0.7, delay: 0.6 + (yearIndex * 0.1) }}
									className="h-px flex-1 bg-gray-200 dark:bg-gray-800 origin-left"
								/>
							</div>
							<motion.div 
								className="grid grid-cols-1 gap-8 w-full"
							>
								<AnimatePresence>
									{projectsByYear[year].map((project, projectIndex) => (
										<motion.div
											key={project.id}
											initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
											animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
											exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
											transition={{ duration: 0.7, delay: 0.7 + (yearIndex * 0.1) + (projectIndex * 0.05) }}
										>
											<ProjectCard project={project} onSelect={setSelectedProject} />
										</motion.div>
									))}
								</AnimatePresence>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
        		</div>
      		</div>
    	</div>
  )
}
