import React from "react";
import PropTypes from "prop-types";
import Notification from '../components/Notification';

import "../styles/Instruction.css";

const Instruction = ({ text, src, alt, message, visible, level }) => (
  <div className="instruction">
    <p className="instruction-text">{text}</p>
    <Notification
      src={src}
      alt={alt}
      message={message}
      visible={visible}
      level={level}
    />
  </div>
);

Instruction.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired
};

export default Instruction;
