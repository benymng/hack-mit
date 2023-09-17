'use client'
import React, { useRef, useState, useCallback } from 'react';

export default function Community() {
  return (
    <section class="bg-gray-300 text-white min-h-screen">
    <div className="flex flex-col justify-center items-center h-full"></div>
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold sm:text-4xl text-blue-500">Your Community</h2>
  
        <p class="mt-4 text-gray-900">
          Meet people who have a similar disease status to you!
        </p>
      </div>
  
      <div
        class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
      >
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">John Atkinson</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              jatkinson@uga.edu
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Siya Goel</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              sg@stanford.edu
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Austin Jamias</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              austinj@bu.edu
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Ben Ng</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              bng@utoronto.edu
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Hack Mit</h2>
            <p class="mt-1 text-sm text-gray-900">
              hm@mit.edu
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Tim Hacks</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              thacks@mit.edu
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">John Doe</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              jd@gmail.com
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 border border-blue-100 p-4 rounded-lg bg-blue-100">
          <div>
            <h2 class="text-lg font-bold text-blue-500">Ali Partovi</h2>
  
            <p class="mt-1 text-sm text-gray-900">
              apartovi@neo.com
            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  </section>
  )
}


