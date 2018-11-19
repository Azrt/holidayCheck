import React from 'react';

import { withFormik } from 'formik';

export const DefaultCommentForm = props => {
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="form__label">Comment:</label>
            <textarea
                value={values.comment}
                onChange={handleChange}
                name="comment"
                className="form__textarea"
            />
            {errors.comment && touched.comment && <p className="form__error">{errors.comment}</p>}
            <button type="submit" className="button form__button">
                Submit
            </button>
        </form>
    );
};

export const CommentForm = withFormik({
    mapPropsToValues: () => ({comment: ''}),
    validate: values => {
        let errors = {};

        if (!values.comment.length) {
            errors.comment = 'Field is required';
        }

        return errors;
    },
    handleSubmit: ((values, { props }) => {
        props.onSubmit(values);
    }),
})(DefaultCommentForm);