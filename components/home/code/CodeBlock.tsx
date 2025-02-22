"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { getHighlighter } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  maximumHeight?: string;
  highlightedLines?: number[];
}

const CodeBlock = ({
  code,
  language,
  highlightedLines = [],
  maximumHeight = "250px",
}: CodeBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const [linesHtml, setLinesHtml] = useState<string[]>([]);
  const isDark = theme === "dark";

  useEffect(() => {
    let isMounted = true;

    const processCode = async () => {
      const shikiTheme = isDark ? "github-dark" : "github-light";
      try {
        const highlighter = await getHighlighter({
          themes: [shikiTheme],
          langs: [language],
        });

        const html = highlighter.codeToHtml(code, {
          lang: language,
          theme: shikiTheme,
        });

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const lineElements = doc.querySelectorAll(".line");
        const lines = Array.from(lineElements).map((el) => el.outerHTML);

        if (isMounted) {
          setLinesHtml(lines);
        }
      } catch (error) {
        console.error("Error highlighting code:", error);
      }
    };

    processCode();

    return () => {
      isMounted = false;
    };
  }, [code, language, isDark]);

  const codeLines = code.split("\n");
  const maxHeight = isExpanded ? "none" : maximumHeight;

  return (
    <div
      className={`relative overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        style={{ maxHeight }}
        className={`overflow-auto transition-all duration-300 pb-10 ${
          !isExpanded && "mask-bottom"
        }`}
      >
        <pre className="p-2 text-sm font-mono leading-6">
          {linesHtml.map((lineHtml, index) => (
            <div
              key={index}
              className={`${
                highlightedLines.includes(index + 1)
                  ? isDark
                    ? "bg-gray-800"
                    : "bg-gray-200"
                  : ""
              } ${isDark ? "text-gray-100" : "text-gray-800"}`}
            >
              <span
                className={`inline-block w-8 mr-4 text-right ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {index + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: lineHtml }} />
            </div>
          ))}
        </pre>
      </div>

      {codeLines.length > 9 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full absolute bottom-0 left-0 p-2 flex items-center justify-center transition-colors hover:cursor-pointer ${
            isDark
              ? "expend-code-dark text-gray-300 hover:text-gray-100"
              : "expend-code text-gray-600 hover:text-gray-900"
          }`}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={22} className="mr-2" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={22} className="mr-2" />
              Show more
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CodeBlock;
