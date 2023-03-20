import React from "react";
import userData from "constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-7xl font-bold py-20 text-center md:text-left">
          A propos de moi,
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
             
          </p>
        </div>
      </div>
      
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1  max-w-6xl mx-auto ">
          <div className="inline-flex flex-col">
          <div className="">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              <br/>
                Mes passions :
                
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-300 space-y-4">
              <br/>
              Depuis le début de mon BTS, j'ai découvert une véritable passion pour le développement informatique. Je suis également un grand pratiquant de judo et de musculation. A travers ce site, vous pourrez explorer mon parcours, mes hobbies ou encore les différents projets effectués durant mon BTS. N'hésitez pas à m'envoyer un message pour tout renseignement via le lien dans "Me Contacter"
              </p>
            </div>

            
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 space-y-4">
              <br/>
              Mon projet professionnel :
              </h1><div id="#ProjetProfessionel"></div>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300 ">
                
              Pour la suite de mes études j'envisage de suivre une formation en alternance de 3 ans  afin d'acquérir un Master qui me permettra d'avoir un large panel de connaissances et de possibilités d'emplois. A la fin des ses études et connaissances acquérie j'aimerais devenir Chef de projet . En effet avec mon petit boulot à coté de mes études le managment est devenu une de mes nouvelles passions ! alors si je peux etre dans le monde du developpement et dirigés des projets je pense que mon avneir est tout tracé. 
              </p>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 space-y-4">
              <br/>
              deployment des services :
              </h1><div id="#Deployer"></div>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300 ">
                
               Mon Portfolio ainsi que mes sites réalisés pendant mes stages ont été déployer avec Vercel. C'est un hébergeur gratuit qui ce lie avec notre compte Git-hub et qui permet une mise en ligne simple et rapide .
              </p>
            </div>
            
          </div>   
        </div>       
      
    </section>
  );
}
