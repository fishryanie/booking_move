import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
export default function Loading() {

  const BooleanLoading = useSelector(state => state.LoadingReducer.loading)
  console.log(BooleanLoading)
  const renderLoading = () => {
    if(BooleanLoading){
      return (
        <div className="w-100 h-100" style={{position:'fixed',top:0,left:0,zIndex:99}}>
          <div className="w-100 h-100 d-flex justify-content-center align-items-center" style={{flexDirection:'row',backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div className="text-white text-center">
              <img className ="w-25 bx-tada mx-auto" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9ImZpbGxlZF9vdXRsaW5lIiBkYXRhLW5hbWU9ImZpbGxlZCBvdXRsaW5lIj48cGF0aCBkPSJtMzQ0IDQ4OGgtMjcybC0zMi0yNTZoMzM2eiIgZmlsbD0iI2U4MmYzZSIvPjxwYXRoIGQ9Im00NjQgNDg4aC05NmwtMTYtMTYwaDEyOHoiIGZpbGw9IiMwMjk2ZTUiLz48cGF0aCBkPSJtNDczLjcxIDM5MC44OS00LjcyIDQ3LjE3LTEwNy44OS0xOS4wNC00Ljg4LTQ4Ljg2eiIgZmlsbD0iIzAyOTZlNSIvPjxwYXRoIGQ9Im00ODggMjk2aC0xNDRsOC0zMmgxMjh6IiBmaWxsPSIjZWFlYWU4Ii8+PHBhdGggZD0ibTQ0OCAyNjRoLTE2di04MGwyNC00OGgxNmwtMjQgNTZ6IiBmaWxsPSIjMDI3NmI0Ii8+PGcgZmlsbD0iI2NiY2JjYiI+PHBhdGggZD0ibTE4NCAyMzJoNDh2MjU2aC00OHoiLz48cGF0aCBkPSJtMTQ0IDQ4OGgtNDBsLTE2LTI1Nmg0OHoiLz48cGF0aCBkPSJtMzEyIDQ4OGgtNDBsOC0yNTZoNDh6Ii8+PC9nPjxwYXRoIGQ9Im0yOTEuNzE0IDEyMC4wMzZhMjAgMjAgMCAwIDAgLTExLjE0Mi0yNiAyMCAyMCAwIDEgMCAtMzcuMTM5LTE0Ljg1NiAyMCAyMCAwIDAgMCAtMTQuODU2IDM3LjEzOWMuMjA4LjA4My40MTguMTM5LjYyNy4yMTVhLjI3NS4yNzUgMCAwIDAgLS4wMTQuMDMgMjAgMjAgMCAwIDAgMzcuMTM5IDE0Ljg1NmMwLS4wMTEuMDA2LS4wMjIuMDEtLjAzMmExOS45ODYgMTkuOTg2IDAgMCAwIDI1LjM3NS0xMS4zNTJ6IiBmaWxsPSIjZDE4ZDI4Ii8+PHBhdGggZD0ibTE4Ny44OCA5OS4wMzRhMjAgMjAgMCAwIDAgLTI1LjkxMy0xMS4zMzQgMjAgMjAgMCAwIDAgLTM3LjI1IDE0LjU3NiAyMCAyMCAwIDAgMCAxNC41NzYgMzcuMjVjLjIwOC0uMDgxLjQtLjE4NS42LS4yNzIgMCAuMDEuMDA2LjAyMS4wMS4wMzJhMjAgMjAgMCAxIDAgMzcuMjUtMTQuNTc2YzAtLjAxMS0uMDEtLjAyLS4wMTQtLjAzMWExOS45ODUgMTkuOTg1IDAgMCAwIDEwLjc0MS0yNS42NDV6IiBmaWxsPSIjZmJiNTQwIi8+PHBhdGggZD0ibTk5Ljg4IDQ4LjA1NGEyMCAyMCAwIDAgMCAtMjUuOTEzLTExLjMzNyAyMCAyMCAwIDEgMCAtMzcuMjUgMTQuNTc2IDIwIDIwIDAgMCAwIDE0LjU3NiAzNy4yNWMuMjA4LS4wODEuNC0uMTg0LjYtLjI3MiAwIC4wMTEuMDA2LjAyMS4wMS4wMzJhMjAgMjAgMCAwIDAgMzcuMjUtMTQuNTc2YzAtLjAxMS0uMDEtLjAyLS4wMTQtLjAzYTE5Ljk4NiAxOS45ODYgMCAwIDAgMTAuNzQxLTI1LjY0M3oiIGZpbGw9IiNkMThkMjgiLz48cGF0aCBkPSJtMTIwIDE4NGEyMCAyMCAwIDAgMCAtMjAtMjAgMjAgMjAgMCAwIDAgLTQwIDAgMjAgMjAgMCAwIDAgMCA0MGMuMjIzIDAgLjQzOS0uMDI2LjY2MS0uMDMzdi4wMzNhMjAgMjAgMCAxIDAgNDAgMGMwLS4wMTEgMC0uMDIyIDAtLjAzM2ExOS45ODYgMTkuOTg2IDAgMCAwIDE5LjMzOS0xOS45Njd6IiBmaWxsPSIjZmJiNTQwIi8+PHBhdGggZD0ibTIwMCAxODRhMjAgMjAgMCAwIDAgLTIwLTIwIDIwIDIwIDAgMCAwIC00MCAwIDIwIDIwIDAgMCAwIDAgNDBjLjIyMyAwIC40MzktLjAyNi42NjEtLjAzM3YuMDMzYTIwIDIwIDAgMCAwIDQwIDBjMC0uMDExIDAtLjAyMiAwLS4wMzNhMTkuOTg2IDE5Ljk4NiAwIDAgMCAxOS4zMzktMTkuOTY3eiIgZmlsbD0iI2QxOGQyOCIvPjxwYXRoIGQ9Im0yODAgMTg0YTIwIDIwIDAgMCAwIC0yMC0yMCAyMCAyMCAwIDAgMCAtNDAgMCAyMCAyMCAwIDAgMCAwIDQwYy4yMjMgMCAuNDM5LS4wMjYuNjYxLS4wMzN2LjAzM2EyMCAyMCAwIDAgMCA0MCAwYzAtLjAxMSAwLS4wMjIgMC0uMDMzYTE5Ljk4NiAxOS45ODYgMCAwIDAgMTkuMzM5LTE5Ljk2N3oiIGZpbGw9IiNmYmI1NDAiLz48cGF0aCBkPSJtMzYwIDE4NGEyMCAyMCAwIDAgMCAtMjAtMjAgMjAgMjAgMCAwIDAgLTQwIDAgMjAgMjAgMCAwIDAgMCA0MGMuMjIzIDAgLjQzOS0uMDI2LjY2MS0uMDMzdi4wMzNhMjAgMjAgMCAwIDAgNDAgMGMwLS4wMTEgMC0uMDIyIDAtLjAzM2ExOS45ODYgMTkuOTg2IDAgMCAwIDE5LjMzOS0xOS45Njd6IiBmaWxsPSIjZDE4ZDI4Ii8+PHBhdGggZD0ibTM4OS45MzYgOTUuNjI1YTIwIDIwIDAgMCAwIC05LjEtMjYuNzggMjAgMjAgMCAwIDAgLTM1Ljg4MS0xNy42ODEgMjAgMjAgMCAwIDAgLTE3LjY4IDM1Ljg4MWMuMi4xLjQwNi4xNzEuNjA4LjI2MiAwIC4wMS0uMDEyLjAxOS0uMDE3LjAyOWEyMCAyMCAwIDEgMCAzNS44ODEgMTcuNjhjMC0uMDEuMDA4LS4wMi4wMTMtLjAzYTE5Ljk4NSAxOS45ODUgMCAwIDAgMjYuMTc2LTkuMzYxeiIgZmlsbD0iI2ZiYjU0MCIvPjxjaXJjbGUgY3g9IjIwOCIgY3k9IjM1MiIgZmlsbD0iI2VhZWFlOCIgcj0iNzIiLz48cGF0aCBkPSJtNDczLjcxIDM5MC44OS00LjcyIDQ3LjE3LTEwNy44OS0xOS4wNC00Ljg4LTQ4Ljg2eiIgZmlsbD0iIzAyNzZiNCIvPjxwYXRoIGQ9Im0zMzYgMjk2aDE2MHYzMmgtMTYweiIgZmlsbD0iI2NiY2JjYiIvPjxyZWN0IGZpbGw9IiNlYWVhZTgiIGhlaWdodD0iMzIiIHJ4PSIxNiIgd2lkdGg9IjM2OCIgeD0iMjQiIHk9IjIwMCIvPjxwYXRoIGQ9Im00MzIgMjQ4aDE2djE2aC0xNnoiIGZpbGw9IiMwMTUwNzgiLz48cGF0aCBkPSJtMzIuNzgyIDk1LjU3YTI3LjgxNSAyNy44MTUgMCAwIDAgMTUuMjE4IDIuMDczIDI4IDI4IDAgMCAwIDUwLjMxOS0yMC4xIDI4IDI4IDAgMCAwIC0yMC4zMTktNTAuMDE0IDI4LjAxOSAyOC4wMTkgMCAwIDAgLTUwLjQ3OSAxOS43NDEgMjguMDExIDI4LjAxMSAwIDAgMCA1LjI2MSA0OC4zem0uMjMtMzAuNDYyYTExLjkyMiAxMS45MjIgMCAwIDEgNi42MjEtNi4zNjQgOCA4IDAgMCAwIDQuNTM1LTEwLjM2NiAxMiAxMiAwIDEgMSAyMi4zNDktOC43NDYgOCA4IDAgMCAwIDEwLjM2NSA0LjUzNSAxMS45ODkgMTEuOTg5IDAgMCAxIDkuMSAyMi4xNzkgOCA4IDAgMCAwIC00LjMxOSAxMC4yYy4wMjMuMDYyLjA0OS4xMjYuMDc1LjE5MWExMiAxMiAwIDAgMSAtMjIuMzM4IDguNzc1IDggOCAwIDAgMCAtMTAuNjcxLTQuNTg5Yy0uMTQ5LjA2NS0uMy4xMzItLjQ4LjIxOWExMiAxMiAwIDAgMSAtMTUuMjM3LTE2LjAzNHoiLz48cGF0aCBkPSJtMzE4LjMzNiA5MC43NDJhMjguMDA1IDI4LjAwNSAwIDAgMCA0OC43NzIgMjMuNjEyIDI4LjAxMiAyOC4wMTIgMCAwIDAgMjMuMjI0LTQ4Ljc0NiAyOCAyOCAwIDAgMCAtNDguNi0yMy45NDUgMjguMDExIDI4LjAxMSAwIDAgMCAtMjMuNCA0OS4wNzl6bTcuMDE1LTI2Ljk0MmExMiAxMiAwIDAgMSAxNi4wNjgtNS40NTkgOCA4IDAgMCAwIDEwLjcxMi0zLjY0IDEyIDEyIDAgMSAxIDIxLjUyOSAxMC42MDggOCA4IDAgMCAwIDMuNjQgMTAuNzEyIDExLjk4OCAxMS45ODggMCAwIDEgLTEwLjI0IDIxLjY3OSA4IDggMCAwIDAgLTEwLjUyMyAzLjg0OGMtLjAwOC4wMTYtLjAxNS4wMzEtLjAyMS4wNDZhMTIgMTIgMCAwIDEgLTIxLjUzNC0xMC42Yy4wNDMtLjA4Mi4wODQtLjE2NS4xMjMtLjI0N2E4IDggMCAwIDAgLTMuOTI5LTEwLjczYy0uMTQ4LS4wNjctLjMtLjEzLS40ODMtLjIwN2ExMi4wMTUgMTIuMDE1IDAgMCAxIC01LjM0Mi0xNi4wMXoiLz48cGF0aCBkPSJtNDk1LjkzOCAyOTUuMDVjLS4wMTEtLjA5My04LjE3Ny0zMi45OS04LjE3Ny0zMi45OWE4IDggMCAwIDAgLTcuNzYxLTYuMDZoLTE2di02Mi4zNThsMjMuMzU0LTU0LjQ5MWE4IDggMCAwIDAgLTcuMzU0LTExLjE1MWgtMzJhOCA4IDAgMCAwIC03LjE1NSA0LjQyMmwtMjQgNDhhNy45OTQgNy45OTQgMCAwIDAgLS44NDUgMy41Nzh2NzJoLTM0LjkzN2wyLjEzOC0xNy4xYTI0IDI0IDAgMCAwIC03LjIwMS00Ni45aC05LjE3OWEyNy45NjEgMjcuOTYxIDAgMCAwIC0xOS43My0zNS4wOTEgMjggMjggMCAwIDAgLTU0LjE4MiAwIDI4IDI4IDAgMCAwIC0xMi45MDkgNy41NDQgMjggMjggMCAwIDAgLTEyLjkwOS03LjU0NCAyNy44NzUgMjcuODc1IDAgMCAwIC00LjM5LTkuMjQzIDI3LjY3NyAyNy42NzcgMCAwIDAgNy43MDktNy4xOTMgMjguMDExIDI4LjAxMSAwIDAgMCAxOS4zOS01MC4zODkgMjguMDE4IDI4LjAxOCAwIDAgMCAtNTAuMzI0LTIwLjExOSAyOCAyOCAwIDAgMCAtMTkuNTIzIDUwLjczIDI4LjA5MyAyOC4wOTMgMCAwIDAgNS4xMDYgMTkuNjU0IDI4LjEgMjguMSAwIDAgMCAtMTIuMTQ4IDE2LjU2IDI4IDI4IDAgMCAwIC0xMi45MTEgNy41NDQgMjcuOTg5IDI3Ljk4OSAwIDAgMCAtMTIuOTExLTcuNTQ0IDI3LjkzNyAyNy45MzcgMCAwIDAgLTQuOTE4LTkuOTY3IDI4LjA1OCAyOC4wNTggMCAwIDAgNC4xNDgtMTguNDIxIDI4IDI4IDAgMCAwIC0yMC4zMTktNTAuMDEyIDI4LjAxOSAyOC4wMTkgMCAwIDAgLTUwLjQ3OCAxOS43NTEgMjguMDExIDI4LjAxMSAwIDAgMCAyMC40NzggNTAuMzYyYy4xMDcuMTQ1LjIyNy4yODEuMzM3LjQyNGEyNy42NTEgMjcuNjUxIDAgMCAwIC0zLjQzMyA3Ljg2NiAyNy45OCAyNy45OCAwIDAgMCAtMTIuOSA3LjU0MSAyOCAyOCAwIDAgMCAtMTIuOTA5LTcuNTQ0IDI4IDI4IDAgMCAwIC01NC4xODIgMCAyOC4wMTcgMjguMDE3IDAgMCAwIC0xOS40NTYgMzYuMDA2IDI0IDI0IDAgMCAwIC0uNjU3IDQ1Ljk4NWwzMS4yNjMgMjUwLjFhOCA4IDAgMCAwIDcuOTM3IDdoMjcyYTggOCAwIDAgMCA3LjkzOC03LjAwOGw0LjUxMi0zNi4xIDMuNTkgMzUuOWE4IDggMCAwIDAgNy45NiA3LjIwOGg5NmE4IDggMCAwIDAgNy45Ni03LjJsMTUuMjgtMTUyLjhoLjc2YTggOCAwIDAgMCA4LThzLS4wMzktMzIuNzU3LS4wNjItMzIuOTV6bS0xNS45MzggMjQuOTVoLTEyOHYtMTZoMTI4em0tMTguMTA4IDEwOC42ODEtOTMuNDMzLTE2LjQ4OC0zLjIzMi0zMi4zMjMgOTkuNzg1IDE3LjYwOXptMTUuODYyLTE0MC42ODFoLTEyMy41MDhsNC0xNmgxMTUuNTA4em0tNDUuNzU0LTEwMi4xMTEgMjAuOTQ0LTQxLjg4OWgxNC45MjRsLTE5LjIyMiA0NC44NDlhOC4wMSA4LjAxIDAgMCAwIC0uNjQ2IDMuMTUxdjY0aC0xNnptLTEzMi0xMy44ODlhOCA4IDAgMCAwIDgtOCAxMiAxMiAwIDAgMSAyNCAwIDggOCAwIDAgMCA4IDggMTEuOTgzIDExLjk4MyAwIDAgMSA4LjkyMyAyMGgtNTcuODQ5YTExLjk4NSAxMS45ODUgMCAwIDEgOC45MjYtMjB6bS03NS4xMzctNzguN2ExMiAxMiAwIDAgMSAxNS42LTYuNjg1IDggOCAwIDAgMCAxMC40LTQuNDU3IDEyIDEyIDAgMCAxIDIyLjI4NCA4LjkxMyA4IDggMCAwIDAgNC40NTcgMTAuNCAxMS45ODkgMTEuOTg5IDAgMCAxIC04LjUzNiAyMi40IDggOCAwIDAgMCAtMTAuMiA0LjY3M3YuMDA2YTEyIDEyIDAgMCAxIC0yMi4yNzctOC45MjZjLjAzMy0uMDguMDY1LS4xNi4wOTUtLjIzOGE4IDggMCAwIDAgLTQuNzQxLTEwLjM2NmMtLjE1OS0uMDU4LS4zMTgtLjExMi0uNTE4LS4xNzdhMTIuMDE1IDEyLjAxNSAwIDAgMSAtNi41NjQtMTUuNTQzem0tNC44NjMgNzguN2E4IDggMCAwIDAgOC04IDEyIDEyIDAgMCAxIDI0IDAgOCA4IDAgMCAwIDggOCAxMi4wMTMgMTIuMDEzIDAgMCAxIDEyIDEyIDExLjg3NiAxMS44NzYgMCAwIDEgLTMuMDg2IDhoLTU3Ljg0YTExLjk4NSAxMS45ODUgMCAwIDEgOC45MjYtMjB6bS05Mi44LTQwLjEwOGExMiAxMiAwIDAgMSAuNDM4LTIyLjE2OSA4IDggMCAwIDAgNC41MzUtMTAuMzY2IDEyIDEyIDAgMSAxIDIyLjM0OS04Ljc0NSA4IDggMCAwIDAgMTAuMzY1IDQuNTM1IDExLjk4OSAxMS45ODkgMCAwIDEgOS4xIDIyLjE3OCA4IDggMCAwIDAgLTQuMzYyIDEwLjA4NWMuMDM1LjA5NS4wNzMuMi4xMTQuM2ExMiAxMiAwIDAgMSAtMTkuOCAxMi42NjggMTEuODYzIDExLjg2MyAwIDAgMSAtMi41MzktMy45MTFsLS4wMjMtLjA1OGE4IDggMCAwIDAgLTEwLjYzOC00LjVjLS4xNDkuMDY1LS4zLjEzMi0uNDgyLjIyYTExLjkyMSAxMS45MjEgMCAwIDEgLTkuMDU3LS4yMzd6bTEyLjggNDAuMTA4YTggOCAwIDAgMCA4LTggMTEuOTM4IDExLjkzOCAwIDAgMSAxLjM1Ny01LjU0NSAyNy45MTIgMjcuOTEyIDAgMCAwIDE5LjM3OC0uMzg1Yy40NTMtLjE3Ny44ODQtLjM4NiAxLjMyMi0uNTg0YTExLjk3NyAxMS45NzcgMCAwIDEgMS45NDMgNi41MTQgOCA4IDAgMCAwIDggOCAxMi4wMTMgMTIuMDEzIDAgMCAxIDEyIDEyIDExLjg3NyAxMS44NzcgMCAwIDEgLTMuMDg3IDhoLTU3LjgzOWExMS45ODUgMTEuOTg1IDAgMCAxIDguOTI2LTIwem0tODAgMGE4IDggMCAwIDAgOC04IDEyIDEyIDAgMCAxIDI0IDAgOCA4IDAgMCAwIDggOCAxMi4wMTMgMTIuMDEzIDAgMCAxIDEyIDEyIDExLjg3OSAxMS44NzkgMCAwIDEgLTMuMDg2IDhoLTU3Ljg0YTExLjk4NSAxMS45ODUgMCAwIDEgOC45MjYtMjB6bS0yMCAzNmgzMzZhOCA4IDAgMCAxIDAgMTZoLTMzNmE4IDggMCAwIDEgMC0xNnptMjQwLjI1NCAyNzIgMy4xNjgtMTAxLjM2YTc5LjcxNiA3OS43MTYgMCAwIDAgMS4zOTQtNDguOTMgNy45NTYgNy45NTYgMCAwIDAgLjE3OS0xLjQyNmwyLjc1OS04OC4yODRoMzEuNzNsLTE1IDI0MHptLTE2OC43MzggMC0xNS0yNDBoMzEuNzNsMi44MTcgOTAuMTM0YTc5LjgwOCA3OS44MDggMCAwIDAgMS43MjYgNDkuMTI4IDguMDU3IDguMDU3IDAgMCAwIC0uMTM3IDEuNzI1bDMuMDk0IDk5LjAxM3ptMTEyLjQ4NC0yNDB2MzMuNjFhODAuMzA4IDgwLjMwOCAwIDAgMCAtMzIgMHYtMzMuNjF6bTQ1LjgzMSA2MS4zYTgwLjQyNyA4MC40MjcgMCAwIDAgLTI5LjgzMS0yMi42di0zOC43aDMxLjc0NnptLTkzLjgzMS0yMi42YTgwLjQyNyA4MC40MjcgMCAwIDAgLTI5LjgzMSAyMi42bC0xLjkxNS02MS4zaDMxLjc0NnptLTI2LjU0NCAxMjcuNzQyYTgwLjMyNyA4MC4zMjcgMCAwIDAgMjYuNTQ0IDE4Ljg1OHY1NC43aC0yNC4yNDZ6bTQyLjU0NCAyMy45NDhhODAuMzA4IDgwLjMwOCAwIDAgMCAzMiAwdjQ5LjYxaC0zMnptMTYtMTQuMzlhNjQgNjQgMCAxIDEgNjQtNjQgNjQuMDcyIDY0LjA3MiAwIDAgMSAtNjQgNjR6bS0xNTguOTM4LTE3NmgzMS40MjJsMTUgMjQwaC0xNi40MjJ6bTE5MC45MzggMjQwdi01NC43YTgwLjM0NCA4MC4zNDQgMCAwIDAgMjYuNTQ1LTE4Ljg1OWwtMi4yOTkgNzMuNTU5em05Ni45MzggMGgtMTYuNDIybDE1LTI0MGgzMS40MjJsLTIgMTZoLTEyLjkzOGE4IDggMCAwIDAgLTcuNzYxIDYuMDZzLTguMTY2IDMyLjktOC4xNzcgMzIuOTg5Yy0uMDIzLjE5My0uMDYyIDMyLjk1MS0uMDYyIDMyLjk1MWE4IDggMCAwIDAgOCA4aC43Nmw0LjU3MSA0NS43MDdhOC4wNzIgOC4wNzIgMCAwIDAgLS4yNjEgMS4yMjd6bTM4LjMgMC01LjEyNy01MS4yNjggOTAuMTg5IDE1LjkxNC0zLjU0IDM1LjM1NHptOTEuMzY5LTk4LjQ4Ny0xMDMuMDM0LTE4LjE4My0yLjczMy0yNy4zM2gxMTAuMzJ6Ii8+PC9nPjwvc3ZnPg==" />
            </div>                
          </div>
        </div>
      )
    }else return null;
  }
 
  return (
    <section className="loading">
      {renderLoading()}
    </section>
  )
}

