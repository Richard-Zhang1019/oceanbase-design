import { TinyArea, theme } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
    243, 226, 192,
  ];
  const config1 = {
    data,
  };
  const config2 = {
    ...config1,
    color: theme.semanticRed,
    point: {},
    areaStyle: {
      fill: theme.semanticRedGradient,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyArea {...config1} />
      </Col>
      <Col span={12}>
        <TinyArea {...config2} />
      </Col>
    </Row>
  );
};
