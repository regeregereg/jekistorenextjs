import { FileSpreadsheet, ImageIcon, History } from 'lucide-react';
import type { MembershipVisualId } from '@/types';

function ReplayVisual() {
  const bars = [40, 65, 50, 80, 60, 90, 70, 55];
  return (
    <div className="mock-inner mock-replay">
      <div className="spark">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      <div className="track" />
      <div className="mock-tags">
        <span>XAUUSD</span>
        <span>BTCUSD</span>
        <span>Saham</span>
      </div>
    </div>
  );
}

function AdminVisual() {
  return (
    <div className="mock-inner" style={{ textAlign: 'center' }}>
      <div className="mock-avatars">
        <div className="avatar-circle av-a">A</div>
        <div className="avatar-circle av-k">K</div>
        <div className="avatar-circle av-plus">+50</div>
      </div>
      <div className="mock-caption">
        <b>Admin</b> · Kamu · +50 Trader Aktif
      </div>
    </div>
  );
}

function AlertVisual() {
  const alerts = [
    { text: 'XAUUSD > ', bold: '2.412.50', suffix: ' tercapai' },
    { text: 'BTCUSD breakout ', bold: 'resistance', suffix: '' },
    { text: 'EURUSD alert ', bold: 'terpasang', suffix: '' },
  ];
  return (
    <div className="mock-inner">
      <div className="mock-alerts">
        {alerts.map((a, i) => (
          <div className="alert-row" key={i}>
            <div className="alert-dot" />
            <span>
              {a.text}
              <b>{a.bold}</b>
              {a.suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportVisual() {
  const bars = [35, 55, 45, 75, 60, 85, 65];
  return (
    <div className="mock-inner mock-export">
      <div className="export-head">
        <span className="tag">XAUUSD · 15M</span>
        <span className="export-status">Siap diunduh</span>
      </div>
      <div className="export-spark">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="export-bar">
        <div className="export-bar-fill" />
      </div>
      <div className="mock-tags">
        <span>
          <FileSpreadsheet size={12} /> CSV
        </span>
        <span>
          <ImageIcon size={12} /> PNG
        </span>
        <span>
          <History size={12} /> Semua Timeframe
        </span>
      </div>
    </div>
  );
}

function GuaranteeVisual() {
  return (
    <div className="mock-inner mock-garansi">
      <div className="garansi-badge">AKTIF</div>
      <div className="garansi-card">
        <div className="garansi-row">
          <span>Status</span>
          <span>Terlindungi</span>
        </div>
        <div className="garansi-row">
          <span>Masa Berlaku</span>
          <span>30 Hari</span>
        </div>
        <div className="garansi-row">
          <span>Penggantian</span>
          <span>Gratis</span>
        </div>
      </div>
    </div>
  );
}

const visualMap: Record<MembershipVisualId, () => JSX.Element> = {
  replay: ReplayVisual,
  admin: AdminVisual,
  alert: AlertVisual,
  export: ExportVisual,
  guarantee: GuaranteeVisual,
};

export function MembershipVisual({ id }: { id: MembershipVisualId }) {
  const Component = visualMap[id];
  return (
    <div className="mock-frame">
      <Component />
    </div>
  );
}
