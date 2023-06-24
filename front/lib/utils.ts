import clsx, { ClassValue } from "clsx";
import * as d3 from "d3";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";
import { ContributionsCollectionType } from "../types/githubTypes";
import { formatDate, normalizeUtc } from "./date";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function drawChart(
  payload: ContributionsCollectionType,
  svgRef: RefObject<SVGSVGElement>,
  theme: string | undefined,
  show: boolean
  ) {

  const contributions = payload.data.user.contributionsCollection.contributionCalendar.weeks
  let showing = show
  const tooltip = d3.select("body").append("div")
  .attr("id", "tooltip")
  .style("display", "none")
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("background-color", "rgba(0, 0, 0, 0.8)")
  .style("color", "#fff")
  .style("padding", "4px 8px")
  .style("border-radius", "4px")
  .style("font-size", "12px");
  const chartWidth = 740
  const chartHeight = 88
  const topMargin = 12
  const leftMargin = 24

  // Source: https://github.com/github/feedback/discussions/7078
  const colorPalette = {
    dark: {
      NONE: "#171717BF", //"#161B22"
      FIRST_QUARTILE: "#0E4429",
      SECOND_QUARTILE: "#006D32",
      THIRD_QUARTILE: "#26A641",
      FOURTH_QUARTILE: "#39D353",
    },
    light: {
      NONE: "#EBEDF0BF",
      FIRST_QUARTILE: "#9BE9A8",
      SECOND_QUARTILE: "#30C463",
      THIRD_QUARTILE: "#30A14E",
      FOURTH_QUARTILE: "#216d39",
    },
    halloweenDark: {
      NONE: "#171717BF", //"#161B22"
      FIRST_QUARTILE: "#631c03",
      SECOND_QUARTILE: "#bd561d",
      THIRD_QUARTILE: "#fa7a18",
      FOURTH_QUARTILE: "#fddf68",
    },
    halloweenLight: {
      NONE: "#ebedf080",
      FIRST_QUARTILE: "#ffee4a",
      SECOND_QUARTILE: "#ffc501",
      THIRD_QUARTILE: "#fe9600",
      FOURTH_QUARTILE: "#03001c",
    },
  }

  const fontFamily =
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
  const today = normalizeUtc(new Date()).toISOString().split("T")[0].substring(5)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = contributions.reduce((months, item) => {
    item.contributionDays.forEach(contribution => {
      const date = normalizeUtc(new Date(contribution.date))

      const month = date.toLocaleDateString("en-us", { month: "short" })
      if (!months.includes(month)) {
        months.push(month)
      }
    })
    return months
  }, new Array<string>())

  const svg = d3
    .select(svgRef.current)
    .attr("width", chartWidth + leftMargin)
    .attr("height", chartHeight + topMargin)

  // clean-up previous render
  svg.selectAll("*").remove()

  // Chart
  const chartContainer = svg
    .append("g")
    .attr("id", "chartContainer")
    .attr("transform", `translate(${leftMargin}, ${topMargin})`)
  const weekPaths = chartContainer
    .selectAll("g")
    .data(contributions)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(${i * 14}, 0)`)

  const firstWeek = contributions[0].contributionDays

  weekPaths.each(function (weekData) {
    const contributionDays = weekData.contributionDays;

    const group = d3
      .select(this)
      .selectAll("g")
      .data(contributionDays)
      .join("g");

    group
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => {
        const dayOfFirstWeek = firstWeek.find((value) => value.date === d.date);
        if (dayOfFirstWeek && firstWeek.length !== 7) {
          const offset = new Date(firstWeek[0].date).getUTCDay();
          return (i + offset) * 13;
        }
        return i * 13;
      })
      .attr("width", 10)
      .attr("height", 10)
      .attr("rx", 2)
      .attr("ry", 2)
      .attr("style", `shape-rendering: geometricPrecision; outline-offset: -1px; border-radius: 5px`)
      .attr("fill", (d) => {
        if (today === "10-31") {
          return theme === "dark" ? colorPalette.halloweenDark[d.contributionLevel] : colorPalette.halloweenLight[d.contributionLevel];
        }
        return theme === "dark" ? colorPalette.dark[d.contributionLevel] : colorPalette.light[d.contributionLevel];
      })
      .append("title")
      .text(
        d =>
          `${d.contributionCount} contribution${d.contributionCount === 1 ? "" : "s"} on ${formatDate(
            normalizeUtc(new Date(d.date))
          )}`
      )
  });

  // Top Axis
  const topAxis = svg.append("g").attr("id", "topAxis")
  topAxis
    .selectAll("text")
    .data(months)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", (d, i) => leftMargin + (chartWidth / months.length) * i)
    .attr("y", () => 7)
    .style("font-size", "9px")
    .style("font-family", fontFamily)
    .style("fill", theme === "dark" ? "#fff" : "#000")

  // Left Axis
  const leftAxis = svg.append("g").attr("id", "leftAxis")
  leftAxis
    .selectAll("text")
    .data(days)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", () => 0)
    .attr("y", (d, i) => topMargin + 9 + (chartHeight / days.length) * i)
    .attr("style", (d, i) => `display: ${i % 2 === 1 ? "block" : "none"}`)
    .style("font-size", "9px")
    .style("font-family", fontFamily)
    .style("fill", theme === "dark" ? "#fff" : "#000")
}