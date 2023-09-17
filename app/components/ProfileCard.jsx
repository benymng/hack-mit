import React from 'react'

export const ProfileCard = ({ data }) => {
  if (!data) {
    return <></>
  }
  
  return (
    <div className="w-fit mx-4">
      <article class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            {data.email}
          </time>

          <a href="#">
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              {data.name}
            </h3>
          </a>
          {/* <div class="mt-4 flex flex-wrap gap-1">
            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Snippet
            </span>

            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              JavaScript
            </span>
          </div> */}
        </div>
      </article>
    </div>
  );
}
