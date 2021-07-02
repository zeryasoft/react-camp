import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import {Button} from "semantic-ui-react";
import ZeryaSoftIoTextInput from "../utilities/customFormControls/ZeryaSoftIoTextInput";
import ProductService from "../services/productService";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema} //validationSchema yuptan geliyor
      onSubmit={(values)=>{
        let productService = new ProductService()
          productService.addProduct(values).then()
      }}
    >
      <Form>
          <ZeryaSoftIoTextInput name="productName" placeholder="Ürün Adı" />
          <ZeryaSoftIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/> 
          <Button color="green" type="submit">Ekle</Button>        
      </Form>
    </Formik>
  );
}
