import React from "react";
import { useNavigate } from "react-router-dom";
import PlanTodo from "./PlanTodo.components";
import styled from "styled-components";

function Plan({ edit, update, setUpdate, delay, setDelay, plan }) {
  const title = plan[0].length > 15 ? plan[0].slice(0, 14) + "..." : plan[0];
  const percent = plan[1][0]["달성률"];
  const todos = plan[1].slice(1);
  const id = todos[0]["plan_id"];
  const navigate = useNavigate();

  return (
    <PlanContainer>
      <PlanHeader onClick={() => navigate(`./plan/${id}`, {state: {title:plan[0]}})}>
        <Title>{title}</Title>
        <Achievement>
          <span style={{ color: "#8977F7" }}>{percent}%</span>
          <span style={{ marginLeft: 5 }}>달성</span>
        </Achievement>
      </PlanHeader>

      {todos.map((todo, i) => {
        return (
          <PlanTodo
            key={i}
            todo={todo}
            update={update}
            setUpdate={setUpdate}
            edit={edit}
            delay={delay}
            setDelay={setDelay}
          />
        );
      })}
    </PlanContainer>
  );
}

export default Plan;

const PlanContainer = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  width: 327px;
  margin-top: 9px;
  padding: 16px 24px;
  border: 1px solid #f0f0f0;
`;

const PlanHeader = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 0 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 16px;
  font-family: "PretendardRegular";
  font-weight: 600;
  padding-right: 12px;
`;

const Achievement = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
