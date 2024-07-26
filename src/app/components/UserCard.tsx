"use client"
//https://v2.chakra-ui.com/docs/components/drawer

import {
    Box,
    Checkbox,
    CheckboxGroup,
    Container,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
    Button,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    
  } from '@chakra-ui/react'
  import { allowedNodeEnvironmentFlags } from 'process'
  import { useState } from 'react';
  import { forwardRef, useRef } from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useCheckbox } from '@chakra-ui/react'
  
  export const SearchBar = (props) => {
  
    return (

    <Container>
       <main className="appointment__card appointment__card--show">
          <section className="appointment__card-left">
              <h2 className="text--regular">Lydia Miller-Jones</h2>
              <section className="interviewer">
                  <h4 className="text--light">Interviewer</h4>
                  <h3 className="text--regular">${props.name}</h3>
              </section>
          </section>
          <section className="appointment__card-right">
              <section className="appointment__actions">
                  <img
                      className="appointment__actions-button"
                      src="images/edit.png"
                      alt="Edit"
                      onClick={props.onEdit}
                  />
                  <img
                      className="appointment__actions-button"
                      src="images/trash.png"
                      alt="Delete"
                      onClick={props.onDelete}
                  />
              </section>
          </section>
      </main>
    </Container>

  );
}
