import 'reactflow/dist/style.css'
import './styles/globals.css'

import { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
} from 'reactflow'
import { zinc } from 'tailwindcss/colors'

import { Square } from './components/nodes/Square'

// Nodes, Edges
const NODE_TYPES = {
  square: Square,
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },
] satisfies Node[]

export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges],
  )

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={INITIAL_NODES}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
      >
        <Background gap={12} size={2} color={zinc['200']} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
