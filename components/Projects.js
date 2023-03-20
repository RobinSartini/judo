import React from "react";
import userData from "constants/data";

export default function Projects() {
  return (

    
<div class="flex flex-col space-y-4 p-8 bg-white rounded-lg shadow dark:bg-gray-800 ">
    <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
    Le Comité de Direction :
    </p>
    <div class="flex  flex-col space-y-4 items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                <a href="#" class="relative block">
                    <img alt="profil" src="evelyne.png" class="mx-auto object-cover rounded-full h-40 w-40 "/>
                </a>
            </div>
            <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                    Evelyne Lescovec
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                    Secrétaire
                </p>
            </div>
            </div>
        
        <div class="flex  flex-col space-y-4 items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                <a  class="relative block">
                    <img alt="profil" src="olivier.png" class="mx-auto object-cover rounded-full h-40 w-40 "/>
                </a>
            </div>
            <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                    Olivier Guillon
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                    Président
                </p>
            </div>
            </div>
        </div>
        <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                <a  class="relative block">
                    <img alt="profil" src="fany.png" class="mx-auto object-cover rounded-full h-40 w-40 "/>
                </a>
            </div>
            <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                    Fany
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                    Trésorière
                    
                </p>
            </div>
            </div>
        </div>
        </div>
        
        <div className="h-0.5 w-full bg-black dark:bg-gray-700"></div>

        
    <p class="text-3xl font-bold text-center text-gray-800 dark:text-white">
    <br/>
                    <br/> Professeur :
    </p>
   
    <div class="flex flex-col space-y-4 items-center md:flex-row justify-around">
        <div class="p-4">
            <div class="mb-4 text-center opacity-90">
                <a  class="relative block">
                    <img alt="profil" src="step.png" class="mx-auto object-cover rounded-full h-40 w-40 "/>
                </a>
            </div>
            <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-white">
                    Stéphane Guillon
                    <br/>
                    <br/>
                    <br/>
                   
                </p>
                
        <div className="h-0.5 w-full bg-black dark:bg-gray-700"></div>
        
        
    <p class="flex flex-col space-y-4 text-3xl font-bold text-center text-gray-800 dark:text-white">
    <br/>
                    <br/>
    Membres actifs :
    </p>
   
    <div class="flex flex-col  items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    Didier Giroud
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                    Bénévoles
                </p>
            </div>
            </div>
        
        <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
               
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    Marjo Dupire
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                Bénévoles
                </p>
            </div>
            </div>
            <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    Lionel Jacquemort
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                    Bénévoles
                </p>
            </div>
            </div>
            <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    François Désormais
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                    Bénévoles
                </p>
            </div>
            </div>
            <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    Adrien Reymond
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                    Bénévoles
                </p>
            </div>
            </div>
            <div class="flex  flex-col items-center md:flex-row justify-around ">
        <div class="p-4 ">
            <div class="mb-4 text-center opacity-90">
                
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-800 dark:text-white">
                    Loic Beauchemin 
                </p>
                <p class="text-l font-light text-gray-500 dark:text-gray-200">
                    Bénévoles
                </p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
       
        
      
  
  );
}

