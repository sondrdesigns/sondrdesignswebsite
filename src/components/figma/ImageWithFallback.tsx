import React, { useState, useEffect } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Reset error state if src changes
  useEffect(() => {
    if (props.src) {
      setDidError(false)
      setIsLoaded(false)
    }
  }, [props.src])

  const { src, alt, style, className, loading = 'lazy', decoding = 'async', ...rest } = props

  // Ensure src is a string (handle module imports)
  const imageSrc = typeof src === 'string' ? src : (src as any)?.default || src

  if (!imageSrc) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src={ERROR_IMG_SRC} 
            alt={alt || "Image placeholder"} 
            loading="lazy"
            decoding="async"
            {...rest}
          />
        </div>
      </div>
    )
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={ERROR_IMG_SRC} 
          alt={alt || "Error loading image"} 
          loading="lazy"
          decoding="async"
          data-original-url={imageSrc}
          {...rest}
        />
      </div>
    </div>
  ) : (
    <img 
      src={imageSrc} 
      alt={alt || ""} 
      className={className} 
      style={style} 
      loading={loading}
      decoding={decoding}
      onError={handleError}
      onLoad={handleLoad}
      fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      {...rest}
    />
  )
}
