type Reg = {
  spec: RegExp;
  kirilik: RegExp;
  regSN: RegExp;
  regSW: RegExp;
  regS: RegExp;
};

export const { spec, kirilik, regSN, regSW, regS }: Reg = {
  spec: /(?=.*[^\w\s])/g,
  kirilik:
    /(?=.*[0-9])(?=.*[!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>])(^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*){1,}/g,
  regSN: /(?=.*[0-9])(?=.*[\W]){8,}/g,
  regSW: /(?=.*[0-9])(?=.*[a-zZ-a]){8,}/g,
  regS: /(?=.*[\W])(?=.*[\w]){8,}/g,
};
