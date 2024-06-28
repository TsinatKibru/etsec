
'use client';


import React, { useEffect } from 'react';
import AOS from 'aos';


export default function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <></>;
}