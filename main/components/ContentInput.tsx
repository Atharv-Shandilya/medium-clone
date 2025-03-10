"use client";
import { useRef, useState } from "react";
import ContentOption from "./ContentOption";

export default ({
  placeholder,
  isTitle,
}: {
  placeholder: string;
  isTitle: boolean;
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>("");

  return (
    <section className="flex max-w-[600px] m-auto items-center relative ">
      {isTitle && content.length != 0 && (
        <div className=" self-start">Title</div>
      )}
      {content.length == 0 && <ContentOption size={14} />}
      <div
        className={`cursor-pointer outline-none flex-1  pl-4 ${
          isTitle ? "text-4xl border-l-[1px] pt-2 pb-1 ml-3 " : ""
        } m-auto`}
        contentEditable
        ref={inputRef}
        onKeyDown={(e) => {
          if (!e.shiftKey && e.key == "Enter") {
            e.preventDefault();
          }
        }}
        onInput={(e) => {
          setContent(e.currentTarget.innerText);
        }}
        onKeyUp={(e) => {
          if (e.key == "Backspace" && e.currentTarget.innerText == "\n")
            setContent("");
        }}
      />
      <p
        className={` ${!content.length ? "" : "hidden"} 
        ${isTitle ? "text-4xl text-gray-400" : ""}
        pointer-events-none absolute left-[60px]`}
      >
        {placeholder}
      </p>
    </section>
  );
};
