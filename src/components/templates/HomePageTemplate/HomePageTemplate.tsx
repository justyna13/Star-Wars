import React from "react";
import { useGetFirstPerson } from "@/pages/HomePage/hooks/services/useGetFirstPerson.tsx";

interface IHomePageTemplate {
  testid: string;
}
export const HomePageTemplate: React.FC<IHomePageTemplate> = ({
  testid
}: IHomePageTemplate) => {

  const { data: firstPerson } = useGetFirstPerson()
  return (
    <div data-testid={testid}>
      home template
      <div>
        {firstPerson ? firstPerson.name : ''}
      </div>
    </div>
  )
}
