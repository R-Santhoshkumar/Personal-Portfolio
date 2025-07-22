"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Vulnerability Assessment and Penetration Testing (VAPT) Project",
      desc: `Planned and executed a full-scale VAPT project to identify and mitigate security vulnerabilities at both the system and application levels. Deployed Kali Linux in a virtual environment and used SEToolkit to simulate a Credential Harvester Attack via phishing. Simulated Man-in-the-Middle attacks to demonstrate real-world credential theft and session hijacking. Nessus was used for network vulnerability scanning, revealing issues such as unsigned SMB traffic, open ports, and outdated services.

      Mitigation involved applying security patches, enforcing secure protocols, reconfiguring settings, and hardening host machines via Windows Group Policy. Post-remediation scans validated the fixes. This project provided hands-on experience with offensive and defensive techniques, social engineering, and the full vulnerability management lifecycle, supported by a detailed step-by-step documentation of findings and remediations.`,
      tech: [
        "Kali Linux",
        "SEToolkit",
        "Tenable Nessus",
        "Windows GPO",
        "Phishing",
        "VAPT",
      ],
    },
    {
      title: "Advanced Networking Project using Cisco Packet Tracer",
      desc: `I designed and implemented a multi-location enterprise network using Cisco Packet Tracer, connecting offices in Coimbatore, Chennai, Bangalore, and Delhi. The setup included proper subnetting, IP addressing, and OSPF routing to ensure smooth inter-network communication. Routers and switches were configured with hostnames, banners, and descriptions. Remote access was secured using SSH and Telnet, while DHCP was used for dynamic IP allocation in Coimbatore and Bangalore, and static IPs were assigned in Chennai and Delhi.

      To enhance security and control, I implemented Access Control Lists (ACLs) to restrict communication between specific hosts and networks. Port Address Translation (PAT) was configured to manage internet access via the ISP in Coimbatore. The entire network was tested for connectivity, and configurations were saved to NVRAM for persistence. This project enhanced my skills in network design, protocol configuration, and security implementation, reinforcing my interest in network engineering and cybersecurity.`,
      tech: ["Cisco Packet Tracer Tool"],
    },
    {
      title: "Azure VNet Peering & Bastion Host Implementation",
      desc: `This project involved setting up secure and scalable communication between two Azure Virtual Networks using VNet Peering. VNet1 and VNet2 were configured with public subnets hosting virtual machines, allowing for private, low-latency connectivity between them without exposing public IPs.

      To enhance security, Azure Bastion was deployed to provide remote access to VMs directly through the Azure portal, eliminating the need for public-facing endpoints. This project deepened my understanding of secure cloud networking, inter-VNet communication, and best practices for remote access in cloud environments.`,
      tech: [
        "Azure VNet",
        "VNet Peering",
        "Azure Bastion",
        "NSGs",
        "Virtual Machines",
      ],
    },
    {
      title: "Comprehensive Digital Forensics Case Analysis",
      desc: `Conducted a detailed forensic investigation using Autopsy 4.21.0 to examine digital evidence and validate its integrity. The process included loading and verifying forensic images, adjusting time zones for accurate analysis, and recovering files from NTFS, FAT16/32, and unallocated spaces. Signature analysis, hash computation, and entropy checks were performed to detect anomalies and verify data consistency.

      Further investigation involved reconstructing browsing history, emails, and chat logs, along with profiling the system through registry and timeline reports. Encryption and steganalysis techniques were applied to identify hidden data, ensuring evidence remained untampered. This project sharpened my skills in digital forensics, data recovery, and secure evidence handling using advanced investigative methodologies.`,
      tech: [
        "Autopsy 4.21.0",
        "Digital Forensics Tools",
        "Encryption Analysis",
        "File Recovery",
        "Steganalysis",
      ],
    },
    {
      title: "High Availability Web Infrastructure using Azure Load Balancer",
      desc: `This project involved deploying a scalable and fault-tolerant web infrastructure on Azure using an Internet-facing Load Balancer. A virtual network with public subnets was created to host two virtual machines, each running a web server with unique content. Azure Bastion was configured for secure VM access without public IP exposure, and Network Security Groups were applied to control traffic flow.

      Both VMs were attached to the Load Balancer backend pool with health probes and rules set to manage traffic distribution. The setup ensured high availability by redirecting traffic to the healthy server when one VM was stopped. This project deepened my understanding of load balancing, cloud-based failover mechanisms, and building resilient web applications in Azure.`,
      tech: [
        "Azure Load Balancer",
        "Azure Virtual Network",
        "Virtual Machines",
        "Bastion Host",
        "NSGs",
      ],
    },
    {
      title: "Secure Azure Network Design with Public and Private Subnets",
      desc: `This project involved designing a secure Azure Virtual Network (VNet) by creating segmented public and private subnets. A Linux VM was deployed in the public subnet to serve as a web server accessible from the internet, while another VM was placed in the private subnet to remain isolated from external access. Network Security Groups were configured to control and restrict communication between the two environments.

      Connectivity was tested using ping and SSH to ensure secure internal communication while maintaining external isolation of the backend VM. This setup provided hands-on experience in subnet-level security, resource segmentation, and designing enterprise-ready cloud networks within Azure.`,
      tech: [
        "Azure Virtual Network",
        "Virtual Machines",
        "NSGs",
        "Subnets",
        "Linux",
        "SSH",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-rows w-full">
        {projects.map(({ title, desc, tech }, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl w-full border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl hover:shadow-green-500/30 transition-all flex flex-row"
            >
              <div className="flex w-full flex-col">
                <h3 className="text-2xl font-bold text-green-300 mb-2">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-green-900/30 text-green-300 px-3 py-1 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Short or Full Description */}
                {!isExpanded && (
                  <p className="text-gray-300 text-sm line-clamp-2"></p>
                )}

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 text-sm mt-2 whitespace-pre-line"
                    >
                      {desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Chevron at Bottom Center-Right */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="text-green-400 text-lg hover:scale-110 transition"
                >
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
