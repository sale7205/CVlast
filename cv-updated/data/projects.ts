export type AssetType = "pdf" | "video"

export interface ProjectAsset {
  type: AssetType
  label: string
  description: string
  path?: string   // PDF: served from /public/pdfs/
  url?: string    // Video: YouTube embed URL
}

export interface Project {
  title: string
  subtitle: string
  description: string
  longDescription?: string
  highlights?: string[]
  category: string
  slug: string
  featured?: boolean
  assets?: ProjectAsset[]
  pdfPath?: string
}

export const projects: Project[] = [
  {
    title: "Prometheus Mission I",
    subtitle: "Autonomous Satellite Refueling Mission",
    description:
      "Led a six-person capstone team designing an autonomous satellite servicing and refueling mission across rendezvous, docking, propellant transfer, and departure phases.",
    longDescription:
      "Prometheus Mission I is a full-scale systems engineering capstone covering the complete CONOPS for an autonomous on-orbit servicing vehicle. The mission architecture spans four phases — far-field rendezvous, proximity operations and docking, propellant transfer, and controlled departure — with subsystem trade studies across GNC, propulsion, power, and communications. The team produced a technical white paper, supplemental addendum, and a formal presentation delivered to a faculty review board.",
    highlights: [
      "6-person team lead; full mission CONOPS from launch to departure",
      "EKF-based relative navigation for autonomous proximity operations",
      "Propellant transfer system sizing and leak-risk trade study",
      "Docking mechanism design with misalignment tolerance analysis",
    ],
    category: "Systems Engineering",
    slug: "prometheus-mission",
    featured: true,
    assets: [
      {
        type: "pdf",
        label: "White Paper",
        description:
          "Full technical white paper covering all mission phases — rendezvous, docking, propellant transfer, and departure.",
        path: "/pdfs/prometheus-whitepaper.pdf",
      },
      {
        type: "pdf",
        label: "Addendum",
        description:
          "Supplemental analysis, updated trade studies, and revised mission parameters.",
        path: "/pdfs/prometheus-addendum.pdf",
      },
      {
        type: "video",
        label: "Presentation",
        description:
          "Full capstone presentation delivered to the faculty review board covering mission architecture and technical findings.",
        url: "https://www.youtube.com/embed/gDJwwbm6Zhs",
      },
      {
        type: "video",
        label: "Business Pitch",
        description:
          "Investor-facing pitch summarizing mission value proposition, market context, and feasibility.",
        url: "https://www.youtube.com/embed/gDJwwbm6Zhs?si=HQTKYTGdFNBdz25y",
      },
    ],
  },
  {
    title: "Extended Kalman Filter",
    subtitle: "Lunar Navigation System",
    description:
      "Designed and implemented a 9-state EKF for lunar navigation using IMU, heading, and position measurements in MATLAB.",
    longDescription:
      "This project developed a 9-state Extended Kalman Filter for a lunar surface navigation system, fusing inertial measurement unit (IMU) data with periodic heading and position fixes. The filter state vector covers position, velocity, and attitude errors, with process and measurement noise tuned against a simulated ground truth trajectory. Performance was evaluated across σ-bound consistency checks and compared against a baseline dead-reckoning solution.",
    highlights: [
      "9-state EKF: position, velocity, and attitude error states",
      "Sensor fusion: IMU + periodic heading + GNSS-equivalent position fixes",
      "Tuned process/measurement noise covariances against simulated ground truth",
      "3σ consistency validation and dead-reckoning error comparison",
    ],
    category: "GNC",
    slug: "ekf-lunar-navigation",
    featured: true,
    assets: [
      {
        type: "pdf",
        label: "Report",
        description:
          "Full technical report covering filter design, state propagation, measurement update equations, and performance results.",
        path: "/pdfs/ekf-lunar-navigation.pdf",
      },
    ],
  },
  {
    title: "Turbine Blade CFD",
    subtitle: "Aerodynamic Design & Analysis",
    description:
      "Built and optimized a parametric turbine blade model with CFD analysis and thermal-structural evaluation using SolidWorks.",
    longDescription:
      "A parametric turbine blade was modeled in SolidWorks and subjected to full CFD analysis to characterize pressure distribution, boundary layer behavior, and lift-to-drag performance across a range of operating conditions. Thermal-structural coupling was used to assess leading-edge heat flux and tip deflection under turbine operating temperatures, informing material and geometry trade-offs.",
    highlights: [
      "Parametric SolidWorks blade geometry with sweep and camber variables",
      "CFD pressure and velocity field analysis across multiple AoA settings",
      "L/D ratio optimization through iterative geometry refinement",
      "Thermal-structural evaluation of tip deflection and leading-edge heat flux",
    ],
    category: "Aerodynamics",
    slug: "turbine-blade-cfd",
    featured: true,
    assets: [
      {
        type: "pdf",
        label: "Report",
        description:
          "Technical report covering blade geometry, CFD setup and boundary conditions, results, and design conclusions.",
        path: "/pdfs/turbine-blade-cfd.pdf",
      },
    ],
  },
  {
    title: "Saudia Technic",
    subtitle: "Aircraft Engineering Internship",
    description:
      "Engineering work involving airworthiness frameworks, maintenance support, and aircraft weight and balance analysis.",
    longDescription:
      "During the internship at Saudia Technic, work spanned multiple engineering functions including airworthiness compliance review, line maintenance documentation support, and weight-and-balance analysis for fleet aircraft. Exposure to MRO operations provided practical grounding in how regulatory frameworks translate to day-to-day engineering decisions at scale.",
    highlights: [
      "Airworthiness compliance review under GACA and EASA frameworks",
      "Weight and balance analysis for narrow-body fleet aircraft",
      "Line maintenance documentation review and technical record keeping",
      "MRO operations exposure across multiple aircraft types",
    ],
    category: "Industry",
    slug: "saudia-technic",
    featured: true,
    assets: [
      {
        type: "pdf",
        label: "Report",
        description:
          "Summary report of engineering tasks, scope of work, and key technical contributions during the internship.",
        path: "/pdfs/saudia-technic.pdf",
      },
    ],
  },
  {
    title: "Technical Portfolio",
    subtitle: "Academic & Research Projects",
    description:
      "Collection of selected academic and technical work in modeling, analysis, and engineering computation.",
    longDescription:
      "A curated collection of academic and research-oriented engineering work covering topics in modeling, numerical analysis, and computational methods. Projects span orbital mechanics, structural analysis, and control systems, each documented with methodology, results, and key takeaways.",
    highlights: [
      "Orbital mechanics and trajectory simulation",
      "Structural and finite element analysis exercises",
      "Control systems design and step-response analysis",
      "Numerical methods and MATLAB-based computation",
    ],
    category: "Portfolio",
    slug: "technical-portfolio",
    featured: true,
    assets: [
      {
        type: "pdf",
        label: "Portfolio",
        description:
          "Full collection of selected academic and research projects with documentation and results.",
        path: "/pdfs/additional-projects.pdf",
      },
    ],
  },
]
