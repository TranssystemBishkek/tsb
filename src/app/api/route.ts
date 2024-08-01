import { FormValues } from "./request.dto";

export async function POST(req: Request) {
  try {
    const chatId = process.env.CHAT_ID;
    const token = process.env.TOKEN;
    const url = `https://api.telegram.org/bot${token}`;
    const { contact, from, to, code, weight, type, options, domains } =
      (await req.json()) as FormValues;

    const message = `
  <b>ЗАЯВКА</b>
  Контактные данные:
  ${italic(contact)}
  Станция отправления: 
  ${italic(from)}
  Станция назначения:
  ${italic(to)}
  Код груза:
  ${italic(code)}
  Вес груза:
  ${italic(weight)}
  Тип подвижного состава:
  ${italic(type)}
  Принадлежность подвижного состава:
  ${italic(options)}
  Оплачиваемые территории ч/з экспедитора:
  ${italic(domains)}
  `;

    const res = await fetch(
      `${url}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}&parse_mode=html`
    );

    const data = await res.json();

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false });
  }
}

function italic(str: string) {
  return "<i>" + str + "</i>";
}
