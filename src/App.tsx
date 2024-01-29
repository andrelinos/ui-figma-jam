import 'reactflow/dist/style.css'
import './styles/globals.css'

import * as Toolbar from '@radix-ui/react-toolbar'
import { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import { zinc } from 'tailwindcss/colors'

import { DefaultEdge } from './components/edges/DefaultEdge'
import { Square } from './components/nodes/Square'

// Nodes, Edges
const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge,
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
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges],
  )

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,

      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 700,
          y: 350,
        },
        data: {},
      },
    ])
  }

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background gap={12} size={2} color={zinc['200']} />
        <Controls />
      </ReactFlow>
      <Toolbar.Root className="fixed bottom-20 left-1/2 h-20 w-96 -translate-x-1/2 overflow-hidden rounded-2xl border border-zinc-300 bg-white px-8 shadow-lg">
        <Toolbar.Button
          className="mt-6 h-32 w-32 rounded bg-fuchsia-600 transition-all ease-in-out hover:-translate-y-2"
          title="Adicionar novo quadro"
          onClick={addSquareNode}
        />
      </Toolbar.Root>
    </div>
  )
}
