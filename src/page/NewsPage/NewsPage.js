import React, { useEffect } from "react";
import "./NewsPage.css";
import { useSelector } from "react-redux";
import { convertDateFormat } from "../../util/timeHelper";

function NewsPage() {
  const news = useSelector((state) => state.newsSlice.data);
  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="newsPage">
      <div className="newsPage__wrapper">
        <h1 className="newsPage__title">{news?.title}</h1>
        <h3 className="newsPage__by">By {news?.author}</h3>
        <p className="newsPage__publish">
          Published On {convertDateFormat(news?.publishedAt)}
        </p>
        <div className="newsPage__img">
          <img src={news.urlToImage} alt="" srcset="" />
        </div>
        <p className="newsPage__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          aliquam doloribus officia accusantium porro alias incidunt a aut
          voluptas vel. Placeat fugiat recusandae sit doloremque atque esse,
          deserunt quae nulla cumque eos quam dolorum, odit minima corporis
          impedit rerum nam quaerat repellat magnam nemo ipsum ea quia cum? Sint
          tenetur neque incidunt fugiat quidem aspernatur ut laborum laudantium
          quas magnam alias distinctio cum, officiis voluptatum ducimus quam
          libero iusto eveniet deserunt nulla, adipisci omnis? Laborum vitae
          incidunt repellat autem harum quasi nesciunt nihil labore totam iste
          facilis tempore doloremque, beatae neque quo nemo in? Nobis, soluta
          earum, a quae quis harum porro amet asperiores, facilis ab explicabo!
          Suscipit illo accusantium quos, quam perferendis culpa, ipsum dolorem
          eaque nisi ad dolores sint id. Animi saepe eligendi eaque aspernatur
          eum ex voluptate sequi ratione. Deserunt, atque pariatur! Architecto
          consectetur magnam mollitia quos. Sunt minus explicabo aut sed
          recusandae debitis eligendi aperiam magni, reprehenderit dignissimos
          sequi! Aut, nesciunt perspiciatis, magni labore sapiente eos rem error
          odio nisi voluptatibus assumenda soluta nostrum quos dolor accusantium
          velit quaerat quasi porro consectetur blanditiis. Delectus rem optio,
          recusandae doloremque magnam ex. Magni ex doloremque neque provident
          dolor aut, ullam quasi ut sint quisquam aperiam quis ducimus unde ea
          eum vitae, fugit doloribus autem laudantium. Ducimus, nihil. Sunt non
          eaque fugit quod quisquam, id, porro, laborum necessitatibus repellat
          cupiditate tenetur ex nemo! Et illum odit pariatur nemo ab excepturi?
          Dolores, praesentium excepturi ipsa vero labore dolorem repudiandae
          veniam earum facilis! Quibusdam illo tenetur veniam saepe ea quos sed
          quod odit quis nulla ab expedita excepturi quas, non, explicabo at
          consectetur? Possimus placeat exercitationem in! Eveniet molestias
          minus eos placeat aliquam, praesentium enim dolor tenetur eius in quam
          ea! Veritatis laudantium nesciunt quos totam, exercitationem
          doloremque cumque odio quas ab reiciendis nulla expedita voluptas,
          blanditiis optio ullam repudiandae. Magni sunt quod adipisci! Iste
          saepe odio nulla ea minima! Voluptate culpa maxime aut repellat
          recusandae esse corporis reiciendis quis, animi quaerat et vero harum
          consequuntur est dignissimos quos! Natus illo vitae earum debitis
          eveniet aspernatur perferendis blanditiis nulla, deleniti voluptatum!
          Eligendi quaerat ipsum consequatur totam exercitationem! Minus,
          deserunt hic assumenda dolorum soluta cumque, corrupti natus nam
          eveniet ex similique facere, quo architecto ullam totam debitis
          voluptas. Maxime nulla quibusdam accusamus rerum voluptatem, quidem,
          expedita omnis perspiciatis optio ipsam, tempore distinctio commodi
          accusantium! Doloremque non hic laudantium quo consequuntur deserunt
          veniam, temporibus reprehenderit qui iste voluptatibus. Tenetur minima
          dicta nam nihil distinctio libero sunt sed aperiam delectus rem beatae
          unde voluptates, non ea, nemo sint adipisci similique, iusto
          temporibus maxime omnis quaerat consequatur mollitia veniam.
          Consequuntur accusamus iusto vel repudiandae repellendus hic quaerat
          excepturi harum ipsam sint. Maiores quidem molestiae nesciunt expedita
          nulla soluta veniam, eveniet dolor error iure. Itaque placeat quas,
          ullam dicta ipsam praesentium assumenda! Magni ipsa, eligendi minus
          sed repellat quo distinctio similique perspiciatis nulla libero sunt
          architecto est minima. Optio rerum laborum eius natus accusamus quidem
          minus facere modi est repudiandae sit ipsam totam veniam,
          reprehenderit obcaecati magnam deleniti architecto a sapiente ut quae,
          harum vitae. Eveniet fugiat minima culpa! Totam placeat nostrum
          veritatis distinctio nihil dolorem hic provident, accusamus quod
          expedita aperiam eius consectetur. Dicta laudantium repellendus vel
          corrupti, possimus distinctio laborum animi ullam dolor delectus
          officia eos rem ab voluptate quos. Voluptates error dignissimos quia.
          Voluptate maiores ipsa laborum harum vel accusantium eum optio, quas
          molestiae adipisci eos sit nihil qui odio a veritatis ratione nam
          similique rem alias, nobis rerum, consequuntur accusamus voluptas.
          Nisi eveniet natus voluptatibus, quis mollitia sed neque beatae
          tempore, harum odit pariatur a libero blanditiis, ab consequuntur
          quisquam totam earum eos. Aliquid maiores ipsa, voluptatem nisi
          aspernatur ullam alias modi. Cum, architecto obcaecati. Harum ipsa
          neque corrupti assumenda molestiae dolore commodi, nostrum sequi
          cumque sit tempore animi ullam quod facilis suscipit fugiat error quia
          optio saepe adipisci quo voluptatibus officia voluptatum. Nemo optio
          quod blanditiis nostrum sunt. Excepturi, veniam blanditiis? Harum
          necessitatibus facere molestias optio voluptatem assumenda nisi ipsa
          at obcaecati, tempore vero similique dolorem iste dolores vitae,
          repellendus placeat praesentium exercitationem explicabo repudiandae
          iusto consectetur? Optio rerum accusantium eligendi possimus eveniet.
          Beatae aspernatur velit totam iste et, corrupti illo atque eius
          maiores dolorem quas numquam ea quia aut ullam non quibusdam, porro
          nemo natus error doloremque vitae? A, animi dolores? Deleniti
          consequatur omnis adipisci distinctio ducimus delectus illum id,
          quidem saepe incidunt consequuntur sapiente quis pariatur quasi
          consectetur in quod fuga officia iure? Nobis quisquam adipisci dolores
          sunt, ex officiis maiores assumenda fugiat veniam quia quo. Quas,
          culpa aspernatur recusandae esse corrupti eius iure reprehenderit hic
          voluptatibus magnam beatae, officia minima placeat quos. Maxime
          ratione obcaecati repudiandae tenetur eveniet error nulla illo quas
          dolores velit officia repellendus blanditiis, nobis eum? Illo maxime
          quia ea obcaecati autem nemo ex perspiciatis. Voluptatibus, debitis
          reiciendis laudantium accusamus autem laborum. Voluptatibus fugiat ut
          quia architecto assumenda deleniti doloribus, aut non velit officiis
          dolore illo quas unde iste consectetur facere, placeat soluta earum
          temporibus ullam ipsa enim sapiente! Dicta sequi dolore provident sint
          consectetur accusamus nam reiciendis porro recusandae doloribus eos,
          labore doloremque voluptatem repudiandae. Nesciunt explicabo quaerat
          ad nobis facilis temporibus nostrum similique neque magni atque
          molestias expedita ducimus iusto amet, doloremque alias optio
          dignissimos voluptas reprehenderit necessitatibus. Error eius sed
          omnis ipsum cupiditate eligendi ut minus consequuntur mollitia, at
          modi esse, fugit vel dolores pariatur amet ratione, accusantium iusto
          corporis dolore provident! Sint iure dignissimos quas aliquam et,
          suscipit quasi aperiam voluptatibus vitae? Quis soluta, quasi fuga
          vero optio placeat culpa. Harum modi asperiores placeat laboriosam
          voluptatem ad sunt libero error aut totam. Cumque nemo explicabo
          aliquid autem unde voluptates quos, eveniet obcaecati similique quo
          odit eum repudiandae quod illum tempora cum, ab recusandae. Natus
          labore est hic sed dolorum vero harum quae neque qui? Officiis quia ea
          voluptatum odit ducimus magnam. Debitis odio, facere possimus rem amet
          officiis iusto provident! Necessitatibus quia repudiandae quibusdam
          vel libero, perferendis eum molestiae earum animi veniam nostrum sint
          iste totam, ipsam aliquid exercitationem eligendi laudantium, at
          reiciendis consequuntur. Ipsum quas a consequuntur dolores porro
          veniam hic tempore? Laboriosam nihil eveniet perferendis nemo iure.
          Cupiditate atque, iusto nulla nam esse id cumque. Pariatur beatae
          possimus deserunt voluptatibus vitae totam consectetur quisquam
          officiis facilis, quae repudiandae, explicabo temporibus velit at
          voluptates!
        </p>
      </div>
    </div>
  );
}

export default NewsPage;
