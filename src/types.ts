import * as Constants from './constants'

export type LayerIdentityMap = Record<string, LayerIdentity>

export interface LayerIdentity {
  type: GerberType
  side: GerberSide
}

export interface ValidLayer {
  type: NonNullable<GerberType>
  side: GerberSide
}

export type ValidatedLayer = LayerIdentity & {valid: boolean}

export type GerberType =
  | typeof Constants.TYPE_COPPER
  | typeof Constants.TYPE_SOLDERMASK
  | typeof Constants.TYPE_SILKSCREEN
  | typeof Constants.TYPE_SOLDERPASTE
  | typeof Constants.TYPE_DRILL
  | typeof Constants.TYPE_OUTLINE
  | typeof Constants.TYPE_DRAWING
  | typeof Constants.TYPE_REPORT
  | null

export type GerberSide =
  | typeof Constants.SIDE_TOP
  | typeof Constants.SIDE_BOTTOM
  | typeof Constants.SIDE_INNER
  | typeof Constants.SIDE_ALL
  | null

export type GerberCad =
  | typeof Constants.CAD_KICAD
  | typeof Constants.CAD_ALTIUM
  | typeof Constants.CAD_ALLEGRO
  | typeof Constants.CAD_EAGLE
  | typeof Constants.CAD_EAGLE_LEGACY
  | typeof Constants.CAD_EAGLE_OSHPARK
  | typeof Constants.CAD_EAGLE_PCBNG
  | typeof Constants.CAD_GEDA_PCB
  | typeof Constants.CAD_ORCAD
  | typeof Constants.CAD_DIPTRACE
  | typeof Constants.CAD_PROTEUS
  | typeof Constants.CAD_PADS
  | typeof Constants.CAD_EASYEDA
  | typeof Constants.CAD_CIRCUITMAKER
  | typeof Constants.CAD_CADENCE_ALLEGRO
  | typeof Constants.CAD_TARGET_3001
  | typeof Constants.CAD_PCAD
  | typeof Constants.CAD_GEDA
  | typeof Constants.CAD_PCB123
  | typeof Constants.CAD_XPEDITION
  | typeof Constants.CAD_AUTODESK_EAGLE
  | typeof Constants.CAD_CIRCUITSTUDIO
  | typeof Constants.CAD_EXPEESSPCB
  | typeof Constants.CAD_FRITZING
  | typeof Constants.CAD_MULTISIM
  | typeof Constants.CAD_TINKERCAD
  | typeof Constants.CAD_ULTIBOARD
  | typeof Constants.CAD_ZENITPCB
  | typeof Constants.CAD_DESIGNSPARK_PCB
  | typeof Constants.CAD_EASY_PC
  | typeof Constants.CAD_TINA
  | typeof Constants.CAD_SPRINT_LAYOUT
  | typeof Constants.CAD_GERBV
  | typeof Constants.CAD_VIEWMATE
  | typeof Constants.CAD_GERBERLOGIX
  | typeof Constants.CAD_ZOFZPCB
  | typeof Constants.CAD_CAM350
  | typeof Constants.CAD_OSMOND_PCB
  | typeof Constants.CAD_UCAMCO
  | null

export interface ExtensionMatcher {
  ext: string
  cad: GerberCad | GerberCad[]
}

export interface FilenameMatcher {
  match: RegExp
  cad: GerberCad | GerberCad[]
}

export interface LayerType {
  type: GerberType
  side: GerberSide
  matchers: Array<ExtensionMatcher | FilenameMatcher>
}

export interface LayerTest {
  type: GerberType
  side: GerberSide
  match: RegExp
  cad: GerberCad
}

export interface LayerTestMatch extends LayerTest {
  filename: string
}
