'use client'
import React, { useRef, useState, useCallback } from 'react';

export default function PersonalProfile() {
  return (
<section class="overflow-hidden bg-gray-50 sm:flex h-screen">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24 flex-1">
    <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Your Title Goes Here
      </h2>

      <p class="text-2xl font-bold text-gray-500 md:mt-2">
        Your Subtitle Goes Here
      </p>

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
      </p>

      <div class="mt-4 md:mt-8">
        <a href="#" class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <div class="flex-1">
    <img alt="Student" src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full object-cover sm:h-full" />
  </div>
</section>
  )
}


