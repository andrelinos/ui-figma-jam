import { Handle, NodeProps, NodeResizer, Position } from 'reactflow'

export function Square(props: NodeProps) {
  return (
    <div className="h-full min-h-[200px] w-full min-w-[200px] rounded-lg bg-fuchsia-600 transition-all ease-in-out hover:brightness-95">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible
        lineClassName="border-blue-400"
        handleClassName="w-3 h-3 bg-white border-2 rounded border-blue-400"
      />

      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 h-3 w-3 bg-blue-400/80"
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 h-3 w-3 bg-blue-400/80"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 h-3 w-3 bg-blue-400/80"
      />

      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 h-3 w-3 bg-blue-400/80"
      />
    </div>
  )
}
