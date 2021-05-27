import React from 'react';
import * as IoIcons from 'react-icons/io';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaAddressCard } from 'react-icons/fa';
import { BiMailSend, BiMessageAltDetail } from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Lista de Contatos',
    path: '/contatos',
    icon: <FaAddressCard />,
    cName: 'nav-text'
  },
  {
    title: 'Lista de Mensagens',
    path: '/mensagens',
    icon: <BiMessageAltDetail />,
    cName: 'nav-text'
  },
  {
    title: 'Adicionar Contatos',
    path: '/adiciona-contatos',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Enviar Mensagens',
    path: '/envia-mensagens',
    icon: <BiMailSend />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/',
    icon: <RiLogoutBoxFill />,
    cName: 'nav-text'
  }
];
