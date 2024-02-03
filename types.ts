import { Card, List } from "@prisma/client";

export type ListwithCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };
