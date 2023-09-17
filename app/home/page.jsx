import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
