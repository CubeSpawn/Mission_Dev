import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const TreeNode = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      >
        {children ? (
          open ? <ChevronDown size={16} /> : <ChevronRight size={16} />
        ) : (
          <div style={{ width: '1rem' }} />
        )}
        <span style={{ marginLeft: '0.25rem', fontSize: '0.875rem' }}>{label}</span>
      </div>
      {open && <div style={{ marginLeft: '1rem', borderLeft: '1px solid #ccc', paddingLeft: '0.5rem' }}>{children}</div>}
    </div>
  );
};

export default function MissionPage() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Mission Tree: Post-Scarcity Infrastructure
      </h1>
      <TreeNode label="Regenerative Civilization Infrastructure">
        <TreeNode label="1. Data Intelligence Layer">
          <TreeNode label="EntropyFold (Recursive Compression)">
            <TreeNode label="Cold Storage Optimization" />
            <TreeNode label="Distributed Archival Protocols" />
            <TreeNode label="Multi-Key/Deep-Space Extensions" />
          </TreeNode>
          <TreeNode label="VaporCore (Privacy/Telemetry Nullification)">
            <TreeNode label="Synthetic User Profiles" />
            <TreeNode label="Behavioral Plausibility Engine" />
            <TreeNode label="Anti-Adtech Countermeasures" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="2. OS + Process Orchestration Layer">
          <TreeNode label="FlowOS (Agentic Modular OS)">
            <TreeNode label="Bootstrapping from Legacy Installs" />
            <TreeNode label="Containerized Tool Archives" />
            <TreeNode label="Dynamic DRM Overrides (DRMs)" />
            <TreeNode label="Integration with EntropyFold & VaporCore" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="3. Manufacturing + Resource Layer">
          <TreeNode label="CubeSpawn (Modular Fab + Templates)">
            <TreeNode label="Cube-Based Machines & Toolchains" />
            <TreeNode label="Simulator + Template Library" />
            <TreeNode label="Science-Spawn (Lab Automation)" />
            <TreeNode label="Template Revenue Feed (3% Principle)" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="4. Extraction + ISRU Layer">
          <TreeNode label="ISRU Modules (Containerized Systems)">
            <TreeNode label="Plastic Processing (Garden Fleet)" />
            <TreeNode label="Lithium Extraction (Thacker Pass)" />
            <TreeNode label="Heliostat-Driven Aluminum Smelting" />
            <TreeNode label="Red Mud Remediation / Glass Reprocessing" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="5. Mobility + Expansion Layer">
          <TreeNode label="HexContainer Freighters">
            <TreeNode label="M680F / M139F Design Line" />
            <TreeNode label="Orbital Assembly / SPSS" />
            <TreeNode label="LEO > Mars > Outer Colonies Supply Chain" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="6. Ecosystem Deployment Layer">
          <TreeNode label="Circular Cities (Post-Scarcity Urban Model)">
            <TreeNode label="Passive Infrastructure / Zero Waste" />
            <TreeNode label="Analytics-Driven Meta-Governance" />
          </TreeNode>
          <TreeNode label="High-Altitude Platform (Launch Assist)">
            <TreeNode label="Balloon-Based Deployment / Orbital Lift" />
          </TreeNode>
          <TreeNode label="Global Digital Twin (GIS/Simulator)">
            <TreeNode label="Site Transition + Material Recovery" />
            <TreeNode label="Adaptive Urban Planning Engine" />
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </div>
  );
}
