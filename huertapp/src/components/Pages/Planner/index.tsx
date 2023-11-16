import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import styles from "./Planner.module.scss";
import PlantPicker from "./PlantPicker";
import SizeInput from "./SizeInput";
import { plantList } from "./plantList";
import { getHuertas } from "../../../Services/huertasService";
import { getPlannerId, postPlanner } from "../../../Services/plannerService";
import { IGridCellType, IPlantType } from "./plannerTypes/plannerTypes";
import { IHuertaDataType } from "../Huertas/huertasTypes/huertasTypes";
import { useMediaQuery } from "react-responsive";
import { setSuccesAlert } from "../../UI/sweetAlertFunctions";

const dirt = plantList.find((plant) => plant.id === "dirt");
const path = plantList.find((plant) => plant.id === "path");

export default function Planner() {
  const [xValue, setXValue] = useState<number>(7);
  const [yValue, setYValue] = useState<number>(8);
  const [currentItem, setCurrentItem] = useState<IPlantType | null>(null);
  const [grid, setGrid] = useState<IGridCellType[]>(createGrid());
  const [huertas, setHuertas] = useState<IHuertaDataType[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(true);
  const isBigScreen = useMediaQuery({ query: "(min-width:800px)" });

  function createGrid() {
    const size = xValue * yValue;
    const a = new Array(size);
    for (let i = 0; i < size; i++) {
      a[i] = { background: dirt?.url, plant: null };
    }
    return a;
  }

  async function getGrid(id: number) {
    if (id === undefined) return;
    const res = await getPlannerId(id.toString());
    if (res.status === 204) {
      setXValue(7);
      setYValue(8);
      setGrid(createGrid());
    } else {
      setXValue(res.data.xSize);
      setYValue(res.data.ySize);
      setGrid(JSON.parse(res.data.grid));
    }
  }

  useEffect(() => {
    (async () => {
      getHuertas().then((res) => {
        setHuertas(res.data);
        setSelectValue(res.data[0].orchard_name);
        getGrid(res.data[0].id);
      });
    })();
  }, []);

  function fillArray(): IGridCellType[] {
    const size = xValue * yValue;
    const a = new Array(size);
    for (let i = 0; i < size; i++) {
      if (i < grid.length) {
        a[i] = grid[i];
      } else {
        a[i] = { background: dirt?.url, plant: null };
      }
    }
    return a;
  }

  useEffect(() => {
    setGrid(fillArray());
  }, [xValue, yValue]);

  useEffect(() => {
    const huertaId: IHuertaDataType | undefined = huertas.find(
      (huerta) => huerta.orchard_name === selectValue
    );
    if (huertaId === undefined) return;
    getGrid(huertaId?.id);
  }, [selectValue]);

  function addItem(i: number) {
    if (currentItem?.id === "") return;
    const newGrid = [...grid];
    if (currentItem?.id === "path" || currentItem?.id === "dirt") {
      newGrid[i].background = currentItem.url;
      newGrid[i].plant = null;
      setGrid([...newGrid]);
      return;
    }
    if (currentItem !== null && newGrid[i].background !== path?.url) {
      newGrid[i].plant = currentItem.url;
      setGrid([...newGrid]);
    }
    if (currentItem === null) {
      newGrid[i].plant = null;
      setGrid([...newGrid]);
    }
  }

  function handleSave() {
    const huertaId: IHuertaDataType | undefined = huertas.find(
      (huerta) => huerta.orchard_name === selectValue
    );
    if (huertaId === undefined) return;
    const stringGrid = JSON.stringify(grid);
    const plannerInfo = JSON.stringify({
      id: huertaId.id,
      xSize: xValue,
      ySize: yValue,
      grid: stringGrid,
    });
    postPlanner(plannerInfo);
    setSuccesAlert("Planner saved");
  }
  const width = `calc(${isBigScreen ? "35vw" : "80vw"} / ${Math.max(
    xValue,
    yValue
  )})`;
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        {(isBigScreen || showPicker) && (
          <PlantPicker
            setCurrentItem={setCurrentItem}
            isBigScreen={isBigScreen}
          ></PlantPicker>
        )}
        <section
          aria-labelledby="planner container"
          className={styles.container}
        >
          {!isBigScreen && (
            <button
              className={styles.showPickerBtn}
              onClick={() => {
                setShowPicker(!showPicker);
              }}
            >
              Show plants
            </button>
          )}
          <div className={styles.menuContainer}>
            <span>
              Select orchard:{" "}
              <select
                name=""
                id=""
                onChange={(e) => {
                  setSelectValue(e.target.value);
                }}
                className={styles.select}
              >
                {huertas.map((data) => {
                  return (
                    <option value={data.orchard_name} key={data.orchard_name}>
                      {data.orchard_name}
                    </option>
                  );
                })}
              </select>
            </span>
            <div className={styles.inputContainer}>
              <SizeInput
                label={"Width"}
                value={xValue}
                setValue={setXValue}
              ></SizeInput>
              <SizeInput
                label={"Height"}
                value={yValue}
                setValue={setYValue}
              ></SizeInput>
            </div>
            <button onClick={handleSave}>Save</button>
          </div>
          <div
            className={
              currentItem !== null ? styles.selectedImg : styles.hidden
            }
          >
            Selected: <img src={currentItem?.url}></img>
          </div>
          <div
            className={styles.gridContainer}
            style={{
              gridTemplateColumns: `repeat(${xValue}, auto)`,
            }}
          >
            {grid.map((square, i) => {
              return (
                <div
                  className={styles.square}
                  key={i}
                  style={{
                    width,
                    backgroundImage: `url(${square.background})`,
                  }}
                  onClick={() => {
                    addItem(i);
                  }}
                >
                  {square.plant !== null ? (
                    <img src={square.plant}></img>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
