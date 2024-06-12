import { useState } from "react";
import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import ExpensesList from "../components/ExpensesList";
import CreateExpense from "../components/CreateExpense";
import { useSelector } from "react-redux";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home() {
  // 기본 month값 1로 기본 1월료 표시
  const [month, setMonth] = useState(1);
  // expenses month와 month가 같으면 :: 선택된 해당 월만 표시
  const expenses = useSelector((state) => state.expenses);

  console.log(expenses);

  const filteredExpenses = expenses.filter((expenses) => expenses.month === month);

  return (
    <Container>
      <MonthNavigation month={month} setMonth={setMonth} />
      <CreateExpense month={month} />
      <ExpensesList expenses={filteredExpenses} />
    </Container>
  );
}
