import React, { ReactElement } from "react";
import Table from "./Table";
import FormTable from "./FormTable";
import Layout from "../Layout";
import styles from "./Table.module.scss";
import FilterOrchardsTasks from "./FilterOrchardsTasks";

function TaskPage(): ReactElement {
  return (
    <Layout>
      <main className={styles.taskPage}>
        <FormTable />
        <FilterOrchardsTasks filter={true} />
        <Table />
      </main>
    </Layout>
  );
}

export default TaskPage;
