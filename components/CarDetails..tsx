import { Fragment } from 'react';
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps{
    isOpen: boolean;
    closeModal:()=> void;
    car: CarProps

}
const CarDetails = ({isOpen, closeModal, car}) => {
  return (
    <div></div>
  )
}

export default CarDetails