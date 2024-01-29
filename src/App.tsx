import 'reactflow/dist/style.css'

import ReactFlow, { Background, Controls } from 'reactflow'
import { zinc } from 'tailwindcss/colors'

export function App() {
  return (
    <div className="h-screen w-screen">
      <ReactFlow>
        <Background gap={12} size={2} color={zinc['200']} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
