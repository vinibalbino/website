import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'

interface NotionRendererProps {
  blocks: BlockObjectResponse[]
}

export function NotionRenderer({ blocks }: NotionRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map(block => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  )
}

function NotionBlock({ block }: { block: BlockObjectResponse }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed">
          {block.paragraph.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </p>
      )

    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          {block.heading_1.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </h1>
      )

    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
          {block.heading_2.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </h2>
      )

    case 'heading_3':
      return (
        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
          {block.heading_3.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </h3>
      )

    case 'bulleted_list_item':
      return (
        <li className="text-gray-700 ml-4">
          {block.bulleted_list_item.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li className="text-gray-700 ml-4">
          {block.numbered_list_item.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </li>
      )

    case 'code':
      return (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800">
            {block.code.rich_text.map(text => text.plain_text).join('')}
          </code>
        </pre>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          {block.quote.rich_text.map((text, index) => (
            <span key={index} className={getTextStyles(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </blockquote>
      )

    case 'image':
      const imageUrl =
        block.image.type === 'external' ? block.image.external.url : block.image.file.url

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt="Imagem do artigo"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )

    case 'divider':
      return <hr className="my-8 border-gray-300" />

    case 'callout':
      return (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
          <div className="flex items-start">
            <span className="text-blue-500 mr-2">💡</span>
            <div className="text-gray-700">
              {block.callout.rich_text.map((text, index) => (
                <span key={index} className={getTextStyles(text.annotations)}>
                  {text.plain_text}
                </span>
              ))}
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

function getTextStyles(annotations: Record<string, any>): string {
  let styles = ''

  if (annotations.bold) styles += ' font-bold'
  if (annotations.italic) styles += ' italic'
  if (annotations.strikethrough) styles += ' line-through'
  if (annotations.underline) styles += ' underline'
  if (annotations.code) styles += ' bg-gray-100 px-1 py-0.5 rounded text-sm font-mono'

  return styles
}
