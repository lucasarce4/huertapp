import React from "react";
import styles from "./Information.module.scss";
import Layout from "../Layout";

export default function Information(): React.ReactElement {
  return (
    <Layout>
      <div className={styles.pdfContainer}>
        <object data="https://inta.gob.ar/sites/default/files/script-tmp-manual_de_cultivos_para_la_huerta_organica_familiar_-.pdf"></object>
      </div>
    </Layout>
  );
}
